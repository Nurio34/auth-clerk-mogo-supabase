import { Dispatch, SetStateAction } from "react";
import CandidateTabBtn from "./CandidateTabBtn";
import RecruiterTabBtn from "./RecruiterTabBtn";
import { ProfileType } from "../Onboard";

type Props = {
    profileType: ProfileType;
    setProfileType: Dispatch<SetStateAction<ProfileType>>;
};

function TabBtns({ profileType, setProfileType }: Props) {
    return (
        <div className="grow flex justify-center items-center md:justify-end gap-[2vw] ">
            <CandidateTabBtn
                profileType={profileType}
                setProfileType={setProfileType}
            />
            <RecruiterTabBtn
                profileType={profileType}
                setProfileType={setProfileType}
            />
        </div>
    );
}

export default TabBtns;
