import { CandidateProfileType } from "@/app/onboard/page";
import React from "react";
import { useGlobalContext } from "../ContextProvider";

function CandidateCard({ candidate }: { candidate: CandidateProfileType }) {
    const { setIsCandidateProfileModalOpen, setSelectedCandidate } =
        useGlobalContext();

    const openCandidateProfileModal = () => {
        setSelectedCandidate(candidate);
        setIsCandidateProfileModalOpen(true);
    };

    return (
        <li
            className=" shadow-md shadow-primary rounded-md py-[2vh] px-[4vw]
            grid gap-[1vh]
        "
        >
            <p>
                <span className=" font-semibold capitalize">name : </span>
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
        </li>
    );
}

export default CandidateCard;
