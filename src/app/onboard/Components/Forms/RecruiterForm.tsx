import { useState } from "react";
import SubmitBtn from "./SubmitBtn";
import { useUser } from "@clerk/nextjs";
import { ProfileType } from "../Onboard";
import { createProfile } from "@/actions/onboard";

export type RecruiterFormType = {
    name: string;
    currentCompany: string;
    position: string;
};

export const initialRecruiterFormState = {
    name: "",
    currentCompany: "",
    position: "",
};

function RecruiterForm({ profileType }: { profileType: ProfileType }) {
    const [recruiterFormData, setRecruiterFormData] =
        useState<RecruiterFormType>(initialRecruiterFormState);

    const isFormValid = Object.values(recruiterFormData).every(
        (input) => input !== "",
    );

    //** --- FORM ACTION --- */
    const authedUser = useUser();
    const { user } = authedUser;

    async function createProfileAction() {
        const data = {
            recruiterInfo: recruiterFormData,
            role: profileType,
            isPremiumUser: false,
            userId: user?.id,
            email: user?.emailAddresses[0].emailAddress,
        };

        await createProfile(data);
    }
    //** -------------- */

    return (
        <form
            action={createProfileAction}
            className=" shadow-md shadow-primary rounded-md w-full max-w-md py-[2vh] px-[4vw] mx-auto
        grid gap-[1vh]
    "
        >
            <h2
                className=" text-center font-semibold text-lg "
                style={{ fontVariant: "small-caps" }}
            >
                Recruiter
            </h2>

            <label
                htmlFor="name"
                className=" font-semibold text-sm"
                style={{ fontVariant: "small-caps" }}
            >
                <p>Name</p>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Name ..."
                    className="input input-xs input-secondary w-full"
                    value={recruiterFormData["name"]}
                    onChange={(e) =>
                        setRecruiterFormData((pre: RecruiterFormType) => ({
                            ...pre,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </label>
            <label
                htmlFor="currentCompany"
                className=" font-semibold text-sm"
                style={{ fontVariant: "small-caps" }}
            >
                <p>Current Company</p>
                <input
                    type="text"
                    name="currentCompany"
                    id="currentCompany"
                    placeholder="Enter Current Company ..."
                    className="input input-xs input-secondary w-full"
                    value={recruiterFormData["currentCompany"]}
                    onChange={(e) =>
                        setRecruiterFormData((pre: RecruiterFormType) => ({
                            ...pre,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </label>
            <label
                htmlFor="currentJobLocation"
                className=" font-semibold text-sm"
                style={{ fontVariant: "small-caps" }}
            >
                <p>Position</p>
                <input
                    type="text"
                    name="position"
                    id="position"
                    placeholder="Enter Position ..."
                    className="input input-xs input-secondary w-full"
                    value={recruiterFormData["position"]}
                    onChange={(e) =>
                        setRecruiterFormData((pre: RecruiterFormType) => ({
                            ...pre,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </label>
            <SubmitBtn isFormValid={isFormValid} />
        </form>
    );
}

export default RecruiterForm;
