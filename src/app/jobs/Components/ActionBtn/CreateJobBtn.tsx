import { Dispatch, SetStateAction } from "react";

function CreateJobBtn({
    setIsJobCreateModalOpen,
}: {
    setIsJobCreateModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
    const onClick = () => setIsJobCreateModalOpen(true);

    return (
        <button className="btn btn-secondary" onClick={onClick}>
            Create Job
        </button>
    );
}

export default CreateJobBtn;
