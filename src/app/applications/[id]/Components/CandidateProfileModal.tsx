import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useGlobalContext } from "../ContextProvider";
import { IoMdClose } from "react-icons/io";
import ResumeBtn from "./ActionBtns/ResumeBtn";
import SelectBtn from "./ActionBtns/SelectBtn";
import RejectBtn from "./ActionBtns/RejectBtn";

function CandidateProfileModal() {
    const {
        isCandidateProfileModalOpen,
        selectedCandidate,
        setIsCandidateProfileModalOpen,
    } = useGlobalContext();

    const closeCandidateProfileModal = () => {
        setIsCandidateProfileModalOpen(false);
    };

    return (
        <AnimatePresence>
            {isCandidateProfileModalOpen && (
                <>
                    <motion.div
                        className=" absolute top-0 left-0 w-full min-h-screen bg-primary"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        exit={{ opacity: 0 }}
                    ></motion.div>
                    <motion.dialog
                        open
                        className="py-[1vh] px-[2vw] rounded-lg shadow-lg shadow-accent"
                        initial={{ x: "-50%", opacity: 0 }}
                        animate={{ x: "0%", opacity: 1 }}
                        exit={{ x: "50%", opacity: 0 }}
                    >
                        <div className="flex">
                            <button
                                type="button"
                                className="btn btn-xs btn-error btn-circle ml-auto"
                                onClick={closeCandidateProfileModal}
                            >
                                <IoMdClose size={16} color="white" />
                            </button>
                        </div>
                        <p className="sm:grid sm:grid-cols-[178px,auto] gap-[1vw]">
                            <span className=" font-semibold capitalize justify-self-end">
                                name :
                            </span>
                            {selectedCandidate?.candidateInfo.name}
                        </p>
                        <p className="sm:grid sm:grid-cols-[178px,auto] gap-[1vw]">
                            <span className=" font-semibold capitalize justify-self-end">
                                collage :
                            </span>
                            {selectedCandidate?.candidateInfo.collage}
                        </p>
                        <p className="sm:grid sm:grid-cols-[178px,auto] gap-[1vw]">
                            <span className=" font-semibold capitalize justify-self-end">
                                currentCompany :
                            </span>
                            {selectedCandidate?.candidateInfo.currentCompany}
                        </p>
                        <p className="sm:grid sm:grid-cols-[178px,auto] gap-[1vw]">
                            <span className=" font-semibold capitalize justify-self-end">
                                currentSalary :
                            </span>
                            {selectedCandidate?.candidateInfo.currentSalary}
                        </p>
                        <p className="sm:grid sm:grid-cols-[178px,auto] gap-[1vw]">
                            <span className=" font-semibold capitalize justify-self-end">
                                previousCompanies :
                            </span>

                            {selectedCandidate?.candidateInfo.previousCompanies}
                        </p>
                        <p className="sm:grid sm:grid-cols-[178px,auto] gap-[1vw]">
                            <span className=" font-semibold capitalize justify-self-end">
                                totalExperience :
                            </span>

                            {selectedCandidate?.candidateInfo.totalExperience}
                        </p>
                        <p className="sm:grid sm:grid-cols-[178px,auto] gap-[1vw]">
                            <span className=" font-semibold capitalize justify-self-end">
                                noticePeriod :
                            </span>
                            {selectedCandidate?.candidateInfo.noticePeriod}
                        </p>
                        <p className="sm:grid sm:grid-cols-[178px,auto] gap-[1vw]">
                            <span className=" font-semibold capitalize justify-self-end">
                                skils :
                            </span>
                            {selectedCandidate?.candidateInfo.skils}
                        </p>
                        <p className="sm:grid sm:grid-cols-[178px,auto] gap-[1vw]">
                            <span className=" font-semibold capitalize justify-self-end">
                                githubProfile :
                            </span>
                            {selectedCandidate?.candidateInfo.githubProfile}
                        </p>
                        <p className="sm:grid sm:grid-cols-[178px,auto] gap-[1vw]">
                            <span className=" font-semibold capitalize justify-self-end">
                                linkedinProfile :
                            </span>

                            {selectedCandidate?.candidateInfo.linkedinProfile}
                        </p>
                        <div className="flex justify-center py-[1vh] px-[2vw] gap-[2vw]">
                            <ResumeBtn />
                            <SelectBtn />
                            <RejectBtn />
                        </div>
                    </motion.dialog>
                </>
            )}
        </AnimatePresence>
    );
}

export default CandidateProfileModal;
