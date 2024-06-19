import { leftBtnAction } from "@/actions/homeBtnsActions";
import { UserProfileType } from "@/app/onboard/Components/Onboard";
import React from "react";

async function LeftButton({ profile }: { profile: UserProfileType }) {
    return (
        <form action={leftBtnAction}>
            <input type="hidden" name="role" id="role" value={profile.role} />
            <button type="submit" className="btn btn-primary">
                {profile.role === "recruiter" ? "Create Job" : "Browse Jobs"}
            </button>
        </form>
    );
}

export default LeftButton;
