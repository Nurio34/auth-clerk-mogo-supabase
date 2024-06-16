import { UserProfileType } from "@/app/onboard/Components/Onboard";
import React, { Dispatch, SetStateAction } from "react";
import CreateJobBtn from "./CreateJobBtn";
import FilterBtns from "./FilterBtns";

function ActionBtn({
    profile,
    setIsJobCreateModalOpen,
}: {
    profile: UserProfileType;
    setIsJobCreateModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <>
            {profile.role === "recruiter" ? (
                <CreateJobBtn
                    setIsJobCreateModalOpen={setIsJobCreateModalOpen}
                />
            ) : (
                <FilterBtns />
            )}
        </>
    );
}

export default ActionBtn;
