import { Dispatch, SetStateAction } from "react";
import { ProfileType } from "../Onboard";

type Props = {
    profileType: ProfileType;
    setProfileType: Dispatch<SetStateAction<ProfileType>>;
};

function RecruiterTabBtn({ profileType, setProfileType }: Props) {
    const onclick = () => {
        setProfileType("recruiter");
    };

    return (
        <button
            className={`btn
            ${
                profileType === "recruiter"
                    ? "btn-md btn-primary"
                    : "btn-sm btn-base-100"
            }
            ${profileType !== "recruiter" && "hover:btn-accent hover:scale-110"}
        `}
            onClick={onclick}
        >
            Recruiter
        </button>
    );
}

export default RecruiterTabBtn;
