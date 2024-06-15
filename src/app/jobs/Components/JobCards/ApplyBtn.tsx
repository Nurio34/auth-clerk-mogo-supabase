import { applyJob, fetchApplicationsOfCandidate } from "@/actions/application";
import { FetchedRecruiterJobsType } from "@/actions/job";
import { CandidateApplicationStatusType } from "@/app/applications/[id]/Components/CandidateProfileModal";
import { UserProfileType } from "@/app/onboard/Components/Onboard";

import { isCandidateProfile } from "@/utils/typeGuard";
import React from "react";

export type JobApplicationType = {
    recruiterId: string;
    name: string;
    email: string;
    candidateId: string;
    status: CandidateApplicationStatusType[];
    jobId: string;
    applyDate: string;
};

function ApplyBtn({
    job,
    profile,
    applications,
}: {
    job: FetchedRecruiterJobsType;
    profile: UserProfileType;
    applications: JobApplicationType[];
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

    return (
        <form action={applyJob}>
            {Object.entries(data).map(([key, value]) => {
                return (
                    <input
                        key={key}
                        type="hidden"
                        name={key}
                        id={key}
                        value={value}
                    />
                );
            })}
            <button
                type="submit"
                className="btn btn-accent btn-sm w-full"
                disabled={applications.some(
                    (applications) =>
                        applications.jobId === job._id &&
                        applications.candidateId === profile.userId,
                )}
            >
                {applications.some(
                    (applications) =>
                        applications.jobId === job._id &&
                        applications.candidateId === profile.userId,
                )
                    ? "Applied"
                    : "Apply"}
            </button>
        </form>
    );
}

export default ApplyBtn;
