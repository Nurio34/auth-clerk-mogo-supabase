import { Dispatch, SetStateAction } from "react";
import { ProfileType } from "../Onboard";

type Props = {
    profileType: ProfileType;
    setProfileType: Dispatch<SetStateAction<ProfileType>>;
};

function CandidateTabBtn({ profileType, setProfileType }: Props) {
    const onclick = () => {
        setProfileType("candidate");
    };

    return (
        <button
            className={`btn
            ${
                profileType === "candidate"
                    ? "btn-md btn-primary"
                    : "btn-sm btn-base-100"
            }
            ${profileType !== "candidate" && "hover:btn-accent hover:scale-110"}
        `}
            onClick={onclick}
        >
            Candidate
        </button>
    );
}

export default CandidateTabBtn;
