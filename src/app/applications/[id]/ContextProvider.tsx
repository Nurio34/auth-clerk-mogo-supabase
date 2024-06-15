"use client";

import React, { createContext, useState, ReactNode, useContext } from "react";
import { CandidateProfileType } from "@/app/onboard/page";
import { FetchedRecruiterJobsType } from "@/actions/job";

type GlobalContextType = {
    job: FetchedRecruiterJobsType;
    candidates: CandidateProfileType[];
    isCandidateProfileModalOpen: boolean;
    setIsCandidateProfileModalOpen: React.Dispatch<
        React.SetStateAction<boolean>
    >;
    selectedCandidate: CandidateProfileType | null;
    setSelectedCandidate: React.Dispatch<
        React.SetStateAction<CandidateProfileType | null>
    >;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Create a Provider component
type GlobalProviderProps = {
    children: ReactNode;
    job: FetchedRecruiterJobsType;
    candidates: CandidateProfileType[];
};

export const GlobalProvider: React.FC<GlobalProviderProps> = ({
    children,
    job,
    candidates,
}) => {
    const [isCandidateProfileModalOpen, setIsCandidateProfileModalOpen] =
        useState(false);
    const [selectedCandidate, setSelectedCandidate] =
        useState<CandidateProfileType | null>(null);

    return (
        <GlobalContext.Provider
            value={{
                job,
                candidates,
                isCandidateProfileModalOpen,
                setIsCandidateProfileModalOpen,
                selectedCandidate,
                setSelectedCandidate,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error(
            "useGlobalContext must be used within a GlobalProvider",
        );
    }
    return context;
};
