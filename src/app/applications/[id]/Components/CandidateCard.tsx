import { CandidateProfileType } from "@/app/onboard/page";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../ContextProvider";
import { CandidateApplicationStatusType } from "./CandidateProfileModal";
import { jobApplicationOfTheCandidate } from "@/actions/application";
import { motion } from "framer-motion";

function CandidateCard({
    ind,
    candidate,
}: {
    ind: number;
    candidate: CandidateProfileType;
}) {
    const { setIsCandidateProfileModalOpen, setSelectedCandidate, job } =
        useGlobalContext();

    const openCandidateProfileModal = () => {
        setSelectedCandidate(candidate);
        setIsCandidateProfileModalOpen(true);
    };

    //** --- GET THE INFO ABOUT IF CANDITE "SELECTED", "REJECTED" OR "NO ACTION YET" --- */
    const [status, setStatus] = useState<CandidateApplicationStatusType[]>([
        "Applied",
    ]);
    const [isStatusFetched, setIsStatusFetched] = useState<boolean>(false);

    useEffect(() => {
        const jobApplicationOfTheCandidateAction = async () => {
            try {
                const result = await jobApplicationOfTheCandidate(
                    job._id,
                    candidate.userId!,
                );
                setStatus(result.status);
            } catch (error) {
            } finally {
                setIsStatusFetched(true);
            }
        };
        jobApplicationOfTheCandidateAction();
    }, [job, candidate]);
    //** -------------------------------------------------------------------------------- */

    return (
        <>
            {isStatusFetched && (
                <motion.li
                    className={`shadow-md rounded-md py-[2vh] px-[4vw]
                        grid gap-[1vh]
                        ${
                            status.includes("Selected")
                                ? "shadow-success"
                                : status.includes("Rejected")
                                ? "shadow-error"
                                : " shadow-primary"
                        }
                    `}
                    initial={{ x: "-50%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * ind }}
                    layout
                >
                    <p>
                        <span className=" font-semibold capitalize">
                            name :{" "}
                        </span>
                        {candidate.candidateInfo.name}
                    </p>
                    <p>
                        <span className=" font-semibold capitalize">
                            current company :{" "}
                        </span>
                        {candidate.candidateInfo.currentCompany}
                    </p>
                    <button
                        type="button"
                        className="btn btn-secondary justify-self-end"
                        onClick={openCandidateProfileModal}
                    >
                        View Profile
                    </button>
                </motion.li>
            )}
        </>
    );
}

export default CandidateCard;
