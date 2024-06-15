import React from "react";
import { useGlobalContext } from "../../ContextProvider";
import { updateSelectedApplication } from "@/actions/application";
import { CandidateApplicationStatusType } from "../CandidateProfileModal";

function SelectBtn({ status }: { status: CandidateApplicationStatusType[] }) {
    const { job, selectedCandidate } = useGlobalContext();

    const updateSelectedApplicationAction = async () => {
        await updateSelectedApplication(
            job._id,
            selectedCandidate?.userId!,
            "Selected",
        );
    };

    return (
        <button
            type="button"
            className={`btn btn-success text-success-content *:
                    ${status.includes("Selected") && "disabled:text-success"}
                `}
            style={{ fontVariant: "small-caps" }}
            onClick={updateSelectedApplicationAction}
            disabled={status.length > 1 ? true : false}
        >
            {status.includes("Selected") ? "Selected" : "Select"}
        </button>
    );
}

export default SelectBtn;
