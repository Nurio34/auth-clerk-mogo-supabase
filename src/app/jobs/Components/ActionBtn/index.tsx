import CreateJobBtn from "./CreateJobBtn";
import FilterBtns from "./FilterBtns";
import { useGlobalContext } from "../../Context";

function ActionBtn() {
    const { profile } = useGlobalContext();

    return (
        <>{profile.role === "recruiter" ? <CreateJobBtn /> : <FilterBtns />}</>
    );
}

export default ActionBtn;
