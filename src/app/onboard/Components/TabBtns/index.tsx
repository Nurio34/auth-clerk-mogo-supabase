import { Dispatch, SetStateAction } from "react";
import CandidateTabBtn from "./CandidateTabBtn";
import RecruiterTabBtn from "./RecruiterTabBtn";
import { ProfileType } from "../Onboard";

type Props = {
    setProfileType: Dispatch<SetStateAction<ProfileType>>;
};

function TabBtns({ setProfileType }: Props) {
    return (
        <div className="grow flex justify-center md:justify-end gap-[2vw] ">
            <CandidateTabBtn setProfileType={setProfileType} />
            <RecruiterTabBtn setProfileType={setProfileType} />
        </div>
    );
}

export default TabBtns;
