import { useFormStatus } from "react-dom";

function SubmitBtn({ isFormValid }: { isFormValid: boolean }) {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="btn btn-primary btn-sm"
            disabled={!isFormValid || pending}
        >
            {pending ? "Submitting..." : "Submit"}
        </button>
    );
}

export default SubmitBtn;
