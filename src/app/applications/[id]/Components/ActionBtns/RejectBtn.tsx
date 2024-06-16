import { updateSelectedApplication } from "@/actions/application";
import { CandidateApplicationStatusType } from "../CandidateProfileModal";
import { useGlobalContext } from "../../ContextProvider";

function RejectBtn({ status }: { status: CandidateApplicationStatusType[] }) {
    const { job, selectedCandidate } = useGlobalContext();

    const updateSelectedApplicationAction = async () => {
        await updateSelectedApplication(
            job._id,
            selectedCandidate?.userId!,
            "Rejected",
        );
    };

    return (
        <button
            type="button"
            className={`btn btn-success text-success-content *:
                ${status.includes("Rejected") && "disabled:text-error"}
            `}
            style={{ fontVariant: "small-caps" }}
            onClick={updateSelectedApplicationAction}
            disabled={status.length > 1 ? true : false}
        >
            {status.includes("Rejected") ? "Rejected" : "Reject"}
        </button>
    );
}

export default RejectBtn;
