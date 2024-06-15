"use client";

import { FetchedRecruiterJobsType } from "@/actions/job";
import { VscGitStashApply } from "react-icons/vsc";
import { JobApplicationType } from "./ApplyBtn";
import Link from "next/link";

function ShowApplicantsBtn({
    job,
    applications,
}: {
    job: FetchedRecruiterJobsType;
    applications: JobApplicationType[];
}) {
    return (
        <Link
            href={`/applications/${job._id}`}
            className=" flex items-center gap-[2vw] shadow-sm bg-orange-600 rounded-md p-[1vh]"
        >
            <div className="w-6">
                <VscGitStashApply size={24} color="white" />
            </div>
            <p className=" text-white">
                {
                    applications.filter(
                        (application) => application.jobId === job._id,
                    ).length
                }{" "}
                {applications.filter(
                    (application) => application.jobId === job._id,
                ).length <= 1
                    ? "Applicant"
                    : "Applicants"}
            </p>
        </Link>
    );
}

export default ShowApplicantsBtn;
