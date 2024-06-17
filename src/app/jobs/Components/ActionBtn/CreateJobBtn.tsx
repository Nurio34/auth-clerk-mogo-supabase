import { useGlobalContext } from "../../Context";

function CreateJobBtn() {
    const { setIsJobCreateModalOpen } = useGlobalContext();

    const onClick = () => setIsJobCreateModalOpen(true);

    return (
        <button className="btn btn-secondary" onClick={onClick}>
            Create Job
        </button>
    );
}

export default CreateJobBtn;
