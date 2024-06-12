import { useState } from "react";
import SubmitBtn from "./SubmitBtn";

export type RecruiterFormType = {
    name: string;
    currentCompany: string;
    position: string;
    isPremiumUser: boolean;
};

export const initialRecruiterFormState = {
    name: "",
    currentCompany: "",
    position: "",
    isPremiumUser: false,
};

function RecruiterForm() {
    const [recruiterFormData, setRecruiterFormData] =
        useState<RecruiterFormType>(initialRecruiterFormState);
    console.log(recruiterFormData);

    return (
        <form
            action=""
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
            <SubmitBtn />
        </form>
    );
}

export default RecruiterForm;
