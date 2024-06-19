import React, { useState } from "react";
import { useGlobalContext } from "../Context";
import { isRecruiterProfile } from "@/utils/typeGuard";
import { RecruiterFormType } from "@/app/onboard/Components/Forms/RecruiterForm";
import SubmitBtn from "./SubmitBtn";
import { updateProfile } from "@/actions/onboard";

function RecruiterForm() {
    const { profile } = useGlobalContext();

    const initialRecruiterFormData = {
        name: isRecruiterProfile(profile) ? profile.recruiterInfo.name : "",
        currentCompany: isRecruiterProfile(profile)
            ? profile.recruiterInfo.currentCompany
            : "",
        position: isRecruiterProfile(profile)
            ? profile.recruiterInfo.position
            : "",
    };

    const [formData, setFormData] = useState<RecruiterFormType>(
        initialRecruiterFormData,
    );

    const isFormValid = Object.values(formData).every((input) => input !== "");

    const updateProfileAction = async () => {
        const userId = profile.userId!;
        const role = profile.role;

        updateProfile(userId, role, formData);
    };

    return (
        <form
            action={updateProfileAction}
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
                    value={formData["name"]}
                    onChange={(e) =>
                        setFormData((pre: RecruiterFormType) => ({
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
                    value={formData["currentCompany"]}
                    onChange={(e) =>
                        setFormData((pre: RecruiterFormType) => ({
                            ...pre,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </label>
            <label
                htmlFor="position"
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
                    value={formData["position"]}
                    onChange={(e) =>
                        setFormData((pre: RecruiterFormType) => ({
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
