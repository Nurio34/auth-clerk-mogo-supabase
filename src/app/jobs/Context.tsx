"use client";

import React, {
    createContext,
    useState,
    ReactNode,
    useContext,
    useEffect,
} from "react";
import { FetchedRecruiterJobsType } from "@/actions/job";
import { User } from "@clerk/nextjs/server";
import { UserProfileType } from "../onboard/Components/Onboard";
import { JobApplicationType } from "./Components/JobCards/ApplyBtn";
import { useParams, usePathname, useSearchParams } from "next/navigation";

type GlobalContextType = {
    user: User;
    profile: UserProfileType;
    applications: JobApplicationType[] | null;
    jobList: FetchedRecruiterJobsType[] | null;
    filteredKeyValue: { [key: string]: string[] };
    setFilteredKeyValue: React.Dispatch<
        React.SetStateAction<{
            [key: string]: string[];
        }>
    >;
    isJobCreateModalOpen: boolean;
    setIsJobCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Create a Provider component
type GlobalProviderProps = {
    children: ReactNode;
    user: User;
    profile: UserProfileType;
    applications: JobApplicationType[] | null;
    jobList: FetchedRecruiterJobsType[] | null;
};

export const GlobalProvider: React.FC<GlobalProviderProps> = ({
    children,
    user,
    profile,
    applications,
    jobList,
}) => {
    const searchParams = useSearchParams();

    //** --- SESSION STORAGE OF "filteredKeyValue" ---  */
    const storageFilteredKeyValue =
        typeof window !== "undefined"
            ? sessionStorage.getItem("filteredKeyValue")
            : null;

    const [filteredKeyValue, setFilteredKeyValue] = useState(
        {} as { [key: string]: string[] },
    );

    useEffect(() => {
        if (storageFilteredKeyValue) {
            setFilteredKeyValue(JSON.parse(storageFilteredKeyValue));
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem(
            "filteredKeyValue",
            JSON.stringify(filteredKeyValue),
        );
    }, [filteredKeyValue]);
    //** ------------------------------------------- */
    const isOpen = searchParams.get("isOpen") === null ? false : true;

    const [isJobCreateModalOpen, setIsJobCreateModalOpen] =
        useState<boolean>(isOpen);

    return (
        <GlobalContext.Provider
            value={{
                user,
                profile,
                applications,
                jobList,
                filteredKeyValue,
                setFilteredKeyValue,
                isJobCreateModalOpen,
                setIsJobCreateModalOpen,
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
