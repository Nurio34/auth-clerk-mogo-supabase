"use client";

import { User } from "@clerk/nextjs/server";
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";
import { UserProfileType } from "../onboard/Components/Onboard";

type GlobalContextTpe = {
    user: User;
    profile: UserProfileType;
};

const GlobalContext = createContext<GlobalContextTpe | null>(null);

type GlobalProviderProps = {
    children: ReactNode;
    user: User;
    profile: UserProfileType;
};

export const GlobalProvider: React.FC<GlobalProviderProps> = ({
    children,
    user,
    profile,
}) => {
    return (
        <GlobalContext.Provider value={{ user, profile }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error(
            "Use 'useGlobalContext' in GlobalProvider...from 'accountPage'",
        );
    }

    return context;
};
