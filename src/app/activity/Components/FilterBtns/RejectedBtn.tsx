import { useGlobalContext } from "../../ContextProvider";

function RejectedBtn() {
    const { setFilterBy } = useGlobalContext();

    const onClick = () => {
        setFilterBy("Rejected");
    };

    return (
        <button
            className="btn btn-sm md:btn-md btn-error text-error-content"
            onClick={onClick}
        >
            Rejected
        </button>
    );
}

export default RejectedBtn;
