import { Dispatch, SetStateAction } from "react";
import { ProfileType } from "../Onboard";

type Props = {
    setProfileType: Dispatch<SetStateAction<ProfileType>>;
};

function RecruiterTabBtn({ setProfileType }: Props) {
    const onclick = () => {
        setProfileType("recruiter");
    };

    return (
        <button className="btn btn-sm btn-primary" onClick={onclick}>
            Recruiter
        </button>
    );
}

export default RecruiterTabBtn;
