"use client";

import { useState } from "react";
import TabBtns from "./TabBtns";
import CanditateForm from "./Forms/CanditateForm";
import RecruiterForm from "./Forms/RecruiterForm";

export type ProfileType = "candidate" | "recruiter";

export type UserProfileType = {
    role: ProfileType;
    isPremiumUser: boolean;
    userId: string | undefined;
    email: string | undefined;
};

function Onboard() {
    const [profileType, setProfileType] = useState<ProfileType>("candidate");

    return (
        <section>
            <header className="py-[2vh] px-[4vw] flex flex-wrap justify-between gap-[2vh] shadow-md shadow-primary">
                <h2
                    className=" font-semibold text-xl capitalize grow text-center md:text-start"
                    style={{ fontVariant: "small-caps" }}
                >
                    Onboard - {profileType}
                </h2>
                <TabBtns
                    profileType={profileType}
                    setProfileType={setProfileType}
                />
            </header>
            <article className="-center pt-[4vh] pb-[2vh] px-[4vw] ">
                {/* {profileType === "candidate" ? (
                    <CanditateForm profileType={profileType} />
                ) : (
                    <RecruiterForm profileType={profileType} />
                )} */}
                <CanditateForm profileType={profileType} />
                <RecruiterForm profileType={profileType} />
            </article>
        </section>
    );
}

export default Onboard;
