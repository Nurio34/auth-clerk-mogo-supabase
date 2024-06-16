import { useGlobalContext } from "../../ContextProvider";

function SelectedBtn() {
    const { setFilterBy } = useGlobalContext();

    const onClick = () => {
        setFilterBy("Selected");
    };

    return (
        <button
            className="btn btn-sm md:btn-md btn-success text-success-content"
            onClick={onClick}
        >
            Selected
        </button>
    );
}

export default SelectedBtn;
