import { rightBtnAction } from "@/actions/homeBtnsActions";
import { UserProfileType } from "@/app/onboard/Components/Onboard";
import React from "react";

function RightButton({ profile }: { profile: UserProfileType }) {
    return (
        <form action={rightBtnAction}>
            <input type="hidden" name="role" id="role" value={profile.role} />
            <button type="submit" className="btn btn-secondary">
                {profile.role === "recruiter" ? "Your Jobs" : "Your Activity"}
            </button>
        </form>
    );
}

export default RightButton;
