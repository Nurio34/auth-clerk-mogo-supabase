import { UserProfileType } from "@/app/onboard/Components/Onboard";
import React, { Dispatch, SetStateAction } from "react";
import CreateJobBtn from "./CreateJobBtn";
import FilterBtn from "./FilterBtn";

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
                <FilterBtn />
            )}
        </>
    );
}

export default ActionBtn;
