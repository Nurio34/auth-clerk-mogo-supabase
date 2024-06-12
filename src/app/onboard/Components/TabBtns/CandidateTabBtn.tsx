import { Dispatch, SetStateAction } from "react";
import { ProfileType } from "../Onboard";

type Props = {
    setProfileType: Dispatch<SetStateAction<ProfileType>>;
};

function CandidateTabBtn({ setProfileType }: Props) {
    const onclick = () => {
        setProfileType("canditate");
    };

    return (
        <button className="btn btn-sm btn-accent" onClick={onclick}>
            Candidate
        </button>
    );
}

export default CandidateTabBtn;
