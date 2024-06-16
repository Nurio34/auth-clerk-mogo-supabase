import React from "react";
import { useGlobalContext } from "../../ContextProvider";

function AppliedBtn() {
    const { setFilterBy } = useGlobalContext();

    const onClick = () => {
        setFilterBy("Applied");
    };

    return (
        <button
            className="btn btn-sm md:btn-md btn-secondary text-secondary-content"
            onClick={onClick}
        >
            Applied
        </button>
    );
}

export default AppliedBtn;
