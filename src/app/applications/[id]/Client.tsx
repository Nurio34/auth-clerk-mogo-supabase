"use client";

import React, { useState } from "react";
import CandidateCard from "./Components/CandidateCard";
import CandidateProfileModal from "./Components/CandidateProfileModal";
import { useGlobalContext } from "./ContextProvider";

const ApplicationsClientPage: React.FC = () => {
    const { job, candidates } = useGlobalContext();

    return (
        <main className="py-[2vh] px-[4vw]">
            <h2
                className=" font-semibold text-lg capitalize"
                style={{ fontVariant: "small-caps" }}
            >
                Applicants for{" "}
                <span className=" uppercase underline underline-offset-2">
                    {job.title}
                </span>
            </h2>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-[2vw] py-[2vh] ">
                {candidates.map((candidate, ind) => {
                    return (
                        <CandidateCard
                            key={candidate.userId}
                            ind={ind}
                            candidate={candidate}
                        />
                    );
                })}
            </ul>
            <CandidateProfileModal />
        </main>
    );
};

export default ApplicationsClientPage;
