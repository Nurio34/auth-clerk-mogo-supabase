import React from "react";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { fetchProfile } from "@/actions/onboard";
import Link from "next/link";

async function Buttons({ userId }: { userId: string | undefined }) {
    if (!userId) {
        return (
            <div className="flex gap-[2vw]">
                <Link href={"/sign-in"} className="btn btn-primary">
                    Find Job
                </Link>
                <Link href={"/sign-in"} className="btn btn-secondary">
                    Post Job
                </Link>
            </div>
        );
    }

    const profile = await fetchProfile(userId);

    return (
        <div className="flex gap-[2vw]">
            <LeftButton profile={profile} />
            <RightButton profile={profile} />
        </div>
    );
}

export default Buttons;
