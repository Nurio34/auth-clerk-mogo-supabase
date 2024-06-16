"use client";

import { FetchedRecruiterJobsType } from "@/actions/job";
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";
import { JobApplicationType } from "../jobs/Components/JobCards/ApplyBtn";

type GlobalContextType = {
    candidateId: string;
    jobs: FetchedRecruiterJobsType[];
    applications: JobApplicationType[];
    filterBy: FilterByType;
    setFilterBy: Dispatch<SetStateAction<FilterByType>>;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

type ContextProviderType = {
    children: ReactNode;
    candidateId: string;
    jobs: FetchedRecruiterJobsType[];
    applications: JobApplicationType[];
};

type FilterByType = "Applied" | "Selected" | "Rejected";

export const ContextProvider: React.FC<ContextProviderType> = ({
    children,
    candidateId,
    jobs,
    applications,
}) => {
    const [filterBy, setFilterBy] = useState<FilterByType>("Applied");

    return (
        <GlobalContext.Provider
            value={{ candidateId, jobs, applications, filterBy, setFilterBy }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error("Error with GlobalContext in '/activity'");
    }
    return context;
};
