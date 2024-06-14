import { FetchedRecruiterJobsType } from "@/actions/job";
import { UserProfileType } from "@/app/onboard/Components/Onboard";
import { isCandidateProfile } from "@/utils/typeGuard";
import React from "react";

export type JobApplicationType = {
    recruiterId: string;
    name: string;
    email: string;
    candidateId: string;
    status: string[];
    jobId: string;
    applyDate: string;
};

function ApplyBtn({
    job,
    profile,
}: {
    job: FetchedRecruiterJobsType;
    profile: UserProfileType;
}) {
    const data: JobApplicationType = {
        recruiterId: job.recruiterId,
        name: isCandidateProfile(profile) ? profile.candidateInfo.name : "",
        email: profile.email!,
        candidateId: profile.userId!,
        status: ["Applied"],
        jobId: job._id,
        applyDate: new Date().toLocaleDateString(),
    };

    console.log(data);

    async function applyJobAction() {}

    return <button className="btn btn-accent btn-sm">Apply</button>;
}

export default ApplyBtn;
