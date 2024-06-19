import React, { useState } from "react";
import { useGlobalContext } from "../Context";
import { isCandidateProfile } from "@/utils/typeGuard";
import SubmitBtn from "./SubmitBtn";
import { updateProfile } from "@/actions/onboard";
import { CandidateFormType } from "@/app/onboard/Components/Forms/CanditateForm";

function RecruiterForm() {
    const { profile } = useGlobalContext();

    const initialRecruiterFormData = {
        name: isCandidateProfile(profile) ? profile.candidateInfo.name : "",
        currentCompany: isCandidateProfile(profile)
            ? profile.candidateInfo.currentCompany
            : "",
        currentJobLocation: isCandidateProfile(profile)
            ? profile.candidateInfo.currentJobLocation
            : "",
        preferedJobLocation: isCandidateProfile(profile)
            ? profile.candidateInfo.preferedJobLocation
            : "",
        currentSalary: isCandidateProfile(profile)
            ? profile.candidateInfo.currentSalary
            : NaN,
        noticePeriod: isCandidateProfile(profile)
            ? profile.candidateInfo.noticePeriod
            : NaN,
        skils: isCandidateProfile(profile) ? profile.candidateInfo.skils : "",
        previousCompanies: isCandidateProfile(profile)
            ? profile.candidateInfo.previousCompanies
            : "",
        totalExperience: isCandidateProfile(profile)
            ? profile.candidateInfo.totalExperience
            : NaN,
        collage: isCandidateProfile(profile)
            ? profile.candidateInfo.collage
            : "",
        collageLocation: isCandidateProfile(profile)
            ? profile.candidateInfo.collageLocation
            : "",
        graduatedYear: isCandidateProfile(profile)
            ? profile.candidateInfo.graduatedYear
            : NaN,
        linkedinProfile: isCandidateProfile(profile)
            ? profile.candidateInfo.linkedinProfile
            : "",
        githubProfile: isCandidateProfile(profile)
            ? profile.candidateInfo.githubProfile
            : "",
        resume: isCandidateProfile(profile) ? profile.candidateInfo.resume : "",
    };

    const [formData, setFormData] = useState<CandidateFormType>(
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
            key="candidate"
            action={updateProfileAction}
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
                    value={formData["name"]}
                    onChange={(e) =>
                        setFormData((pre: CandidateFormType) => ({
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
                        setFormData((pre: CandidateFormType) => ({
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
                    value={formData["currentJobLocation"]}
                    onChange={(e) =>
                        setFormData((pre: CandidateFormType) => ({
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
                    value={formData["preferedJobLocation"]}
                    onChange={(e) =>
                        setFormData((pre: CandidateFormType) => ({
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
                    value={formData["currentSalary"]}
                    onChange={(e) =>
                        setFormData((pre: CandidateFormType) => ({
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
                    value={formData["noticePeriod"]}
                    onChange={(e) =>
                        setFormData((pre: CandidateFormType) => ({
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
                    value={formData["skils"]}
                    onChange={(e) =>
                        setFormData((pre: CandidateFormType) => ({
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
                    value={formData["previousCompanies"]}
                    onChange={(e) =>
                        setFormData((pre: CandidateFormType) => ({
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
                    value={formData["totalExperience"]}
                    onChange={(e) =>
                        setFormData((pre: CandidateFormType) => ({
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
                    value={formData["collage"]}
                    onChange={(e) =>
                        setFormData((pre: CandidateFormType) => ({
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
                    value={formData["collageLocation"]}
                    onChange={(e) =>
                        setFormData((pre: CandidateFormType) => ({
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
                    value={formData["graduatedYear"]}
                    onChange={(e) =>
                        setFormData((pre: CandidateFormType) => ({
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
                    value={formData["linkedinProfile"]}
                    onChange={(e) =>
                        setFormData((pre: CandidateFormType) => ({
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
                    value={formData["githubProfile"]}
                    onChange={(e) =>
                        setFormData((pre: CandidateFormType) => ({
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
