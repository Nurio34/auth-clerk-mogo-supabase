import React from "react";
import AppliedBtn from "./AppliedBtn";
import SelectedBtn from "./SelectedBtn";
import RejectedBtn from "./RejectedBtn";

function FilterBtns() {
    return (
        <ul className="flex gap-[2vw] items-center grow justify-center md:grow-0">
            <li>
                <AppliedBtn />
            </li>
            <li>
                <SelectedBtn />
            </li>
            <li>
                <RejectedBtn />
            </li>
        </ul>
    );
}

export default FilterBtns;
