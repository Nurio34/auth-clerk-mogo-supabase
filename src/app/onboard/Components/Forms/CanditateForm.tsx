import { useEffect, useState } from "react";
import SubmitBtn from "./SubmitBtn";
import { ProfileType } from "../Onboard";

export type CandidateFormType = {
    name: string;
    currentCompany: string;
    currentJobLocation: string;
    preferedJobLocation: string;
    currentSalary: number;
    noticePeriod: number;
    skils: string;
    previousCompanies: string;
    totalExperience: number;
    collage: string;
    collageLocation: string;
    graduatedYear: number;
    linkedinProfile: string;
    githubProfile: string;
    resume: File | null;
};

export const initialCandidateFormState = {
    name: "",
    currentCompany: "",
    currentJobLocation: "",
    preferedJobLocation: "",
    currentSalary: NaN,
    noticePeriod: NaN,
    skils: "",
    previousCompanies: "",
    totalExperience: NaN,
    collage: "",
    collageLocation: "",
    graduatedYear: NaN,
    linkedinProfile: "",
    githubProfile: "",
    resume: null,
};

function CanditateForm({ profileType }: { profileType: ProfileType }) {
    const [candidateFormData, setCandidateFormData] =
        useState<CandidateFormType>(initialCandidateFormState);

    const isFormValid = Object.values(candidateFormData).every(
        (input) => input !== "" && !Number.isNaN(input) && input !== null,
    );

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
                Canditate
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
                    value={candidateFormData["name"]}
                    onChange={(e) =>
                        setCandidateFormData((pre: CandidateFormType) => ({
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
                    value={candidateFormData["currentCompany"]}
                    onChange={(e) =>
                        setCandidateFormData((pre: CandidateFormType) => ({
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
                <p>Current Job Location</p>
                <input
                    type="text"
                    name="currentJobLocation"
                    id="currentJobLocation"
                    placeholder="Enter Current Job Location ..."
                    className="input input-xs input-secondary w-full"
                    value={candidateFormData["currentJobLocation"]}
                    onChange={(e) =>
                        setCandidateFormData((pre: CandidateFormType) => ({
                            ...pre,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </label>
            <label
                htmlFor="preferedJobLocation"
                className=" font-semibold text-sm"
                style={{ fontVariant: "small-caps" }}
            >
                <p>Prefered Job Location</p>
                <input
                    type="text"
                    name="preferedJobLocation"
                    id="preferedJobLocation"
                    placeholder="Enter Prefered Job Location ..."
                    className="input input-xs input-secondary w-full"
                    value={candidateFormData["preferedJobLocation"]}
                    onChange={(e) =>
                        setCandidateFormData((pre: CandidateFormType) => ({
                            ...pre,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </label>
            <label
                htmlFor="currentSalary"
                className=" font-semibold text-sm"
                style={{ fontVariant: "small-caps" }}
            >
                <p>Current Salary</p>
                <input
                    type="number"
                    name="currentSalary"
                    id="currentSalary"
                    placeholder="Enter Current Salary ..."
                    className="input input-xs input-secondary w-full"
                    value={candidateFormData["currentSalary"]}
                    onChange={(e) =>
                        setCandidateFormData((pre: CandidateFormType) => ({
                            ...pre,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </label>
            <label
                htmlFor="noticePeriod"
                className=" font-semibold text-sm"
                style={{ fontVariant: "small-caps" }}
            >
                <p>Notice Period</p>
                <input
                    type="number"
                    name="noticePeriod"
                    id="noticePeriod"
                    placeholder="Enter Notice Period ..."
                    className="input input-xs input-secondary w-full"
                    value={candidateFormData["noticePeriod"]}
                    onChange={(e) =>
                        setCandidateFormData((pre: CandidateFormType) => ({
                            ...pre,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </label>
            <label
                htmlFor="skils"
                className=" font-semibold text-sm"
                style={{ fontVariant: "small-caps" }}
            >
                <p>Skils</p>
                <input
                    type="text"
                    name="skils"
                    id="skils"
                    placeholder="Enter Skils ..."
                    className="input input-xs input-secondary w-full"
                    value={candidateFormData["skils"]}
                    onChange={(e) =>
                        setCandidateFormData((pre: CandidateFormType) => ({
                            ...pre,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </label>
            <label
                htmlFor="previousCompanies"
                className=" font-semibold text-sm"
                style={{ fontVariant: "small-caps" }}
            >
                <p>Previous Companies</p>
                <input
                    type="text"
                    name="previousCompanies"
                    id="previousCompanies"
                    placeholder="Enter Previous Companies ..."
                    className="input input-xs input-secondary w-full"
                    value={candidateFormData["previousCompanies"]}
                    onChange={(e) =>
                        setCandidateFormData((pre: CandidateFormType) => ({
                            ...pre,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </label>
            <label
                htmlFor="totalExperience"
                className=" font-semibold text-sm"
                style={{ fontVariant: "small-caps" }}
            >
                <p>Total Experience</p>
                <input
                    type="number"
                    name="totalExperience"
                    id="totalExperience"
                    placeholder="Enter Total Experience ..."
                    className="input input-xs input-secondary w-full"
                    value={candidateFormData["totalExperience"]}
                    onChange={(e) =>
                        setCandidateFormData((pre: CandidateFormType) => ({
                            ...pre,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </label>
            <label
                htmlFor="collage"
                className=" font-semibold text-sm"
                style={{ fontVariant: "small-caps" }}
            >
                <p>Collage</p>
                <input
                    type="text"
                    name="collage"
                    id="collage"
                    placeholder="Enter Collage ..."
                    className="input input-xs input-secondary w-full"
                    value={candidateFormData["collage"]}
                    onChange={(e) =>
                        setCandidateFormData((pre: CandidateFormType) => ({
                            ...pre,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </label>
            <label
                htmlFor="collageLocation"
                className=" font-semibold text-sm"
                style={{ fontVariant: "small-caps" }}
            >
                <p>Collage Location</p>
                <input
                    type="text"
                    name="collageLocation"
                    id="collageLocation"
                    placeholder="Enter Collage Location ..."
                    className="input input-xs input-secondary w-full"
                    value={candidateFormData["collageLocation"]}
                    onChange={(e) =>
                        setCandidateFormData((pre: CandidateFormType) => ({
                            ...pre,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </label>
            <label
                htmlFor="graduatedYear"
                className=" font-semibold text-sm"
                style={{ fontVariant: "small-caps" }}
            >
                <p>Graduated Year</p>
                <input
                    type="number"
                    name="graduatedYear"
                    id="graduatedYear"
                    placeholder="Enter Graduated Year ..."
                    className="input input-xs input-secondary w-full"
                    value={candidateFormData["graduatedYear"]}
                    onChange={(e) =>
                        setCandidateFormData((pre: CandidateFormType) => ({
                            ...pre,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </label>
            <label
                htmlFor="linkedinProfile"
                className=" font-semibold text-sm"
                style={{ fontVariant: "small-caps" }}
            >
                <p>Linkedin Profile</p>
                <input
                    type="url"
                    name="linkedinProfile"
                    id="linkedinProfile"
                    placeholder="Enter Linkedin Profile ..."
                    className="input input-xs input-secondary w-full"
                    value={candidateFormData["linkedinProfile"]}
                    onChange={(e) =>
                        setCandidateFormData((pre: CandidateFormType) => ({
                            ...pre,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </label>
            <label
                htmlFor="githubProfile"
                className=" font-semibold text-sm"
                style={{ fontVariant: "small-caps" }}
            >
                <p>GithubProfile</p>
                <input
                    type="url"
                    name="githubProfile"
                    id="githubProfile"
                    placeholder="Enter GithubProfile ..."
                    className="input input-xs  input-secondary w-full"
                    value={candidateFormData["githubProfile"]}
                    onChange={(e) =>
                        setCandidateFormData((pre: CandidateFormType) => ({
                            ...pre,
                            [e.target.name]: e.target.value,
                        }))
                    }
                />
            </label>
            <label
                htmlFor="resume"
                className=" font-semibold text-sm"
                style={{ fontVariant: "small-caps" }}
            >
                <p>Resume</p>
                <input
                    type="file"
                    name="resume"
                    id="resume"
                    placeholder="Enter Resume ..."
                    className="input input-xs  input-secondary w-full"
                    onChange={(e) =>
                        setCandidateFormData((pre: CandidateFormType) => ({
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

export default CanditateForm;
