"use client";

import { UserProfileType } from "@/app/onboard/Components/Onboard";
import ActionBtn from "./ActionBtn";
import JobCreateModal from "./JobCreateModal";
import { useState } from "react";
import { User } from "@clerk/nextjs/server";

function JobsInteractionPage({
    user,
    profile,
}: {
    user: User;
    profile: UserProfileType | null;
}) {
    if (profile === null) {
        return;
    } else {
        const [isJobCreateModalOpen, setIsJobCreateModalOpen] =
            useState<boolean>(false);

        return (
            <header className="flex justify-between items-center">
                <h1
                    className=" font-semibold text-xl"
                    style={{ fontVariant: "small-caps" }}
                >
                    {profile.role === "recruiter"
                        ? "Your Job List"
                        : "Explore All Jobs"}
                </h1>
                <ActionBtn
                    profile={profile}
                    setIsJobCreateModalOpen={setIsJobCreateModalOpen}
                />
                <JobCreateModal
                    isJobCreateModalOpen={isJobCreateModalOpen}
                    setIsJobCreateModalOpen={setIsJobCreateModalOpen}
                    user={user}
                    profile={profile}
                />
            </header>
        );
    }
}

export default JobsInteractionPage;
