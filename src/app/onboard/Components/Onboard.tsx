"use client";

import { useState } from "react";
import TabBtns from "./TabBtns";
import CanditateForm from "./Forms/CanditateForm";
import RecruiterForm from "./Forms/RecruiterForm";

export type ProfileType = "canditate" | "recruiter";

function Onboard() {
    const [profileType, setProfileType] = useState<ProfileType>("canditate");

    return (
        <section>
            <header className="py-[2vh] px-[4vw] flex flex-wrap justify-between gap-[2vh] shadow-md shadow-primary">
                <h2
                    className=" font-semibold text-xl capitalize grow text-center md:text-start"
                    style={{ fontVariant: "small-caps" }}
                >
                    Onboard - {profileType}
                </h2>
                <TabBtns setProfileType={setProfileType} />
            </header>
            <article className="-center pt-[4vh] pb-[2vh] px-[4vw] ">
                {profileType === "canditate" ? (
                    <CanditateForm />
                ) : (
                    <RecruiterForm />
                )}
            </article>
        </section>
    );
}

export default Onboard;
