import { fetchApplicationsOfRecruiter } from "@/actions/application";
import { FetchedRecruiterJobsType, fetchRecruiterJobs } from "@/actions/job";
import { fetchProfile } from "@/actions/onboard";
import { CandidateProfileType } from "@/app/onboard/page";
import { isCandidateProfile } from "@/utils/typeGuard";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import ApplicationsClientPage from "./Client";
import { GlobalProvider } from "./ContextProvider";
import { redirect } from "next/navigation";

async function ApplicationsPage({ params }: { params: { id: string } }) {
    const { id: jobId } = params;

    const user = await currentUser();
    const recruiterId = user?.id;

    if (!recruiterId) redirect("/sign-in");

    let applications = await fetchApplicationsOfRecruiter(recruiterId);
    applications = applications.filter(
        (application) => application.jobId === jobId,
    );

    const candidatesFN = async (): Promise<CandidateProfileType[]> => {
        const profiles = await Promise.all(
            applications.map(async (application) => {
                return await fetchProfile(application.candidateId);
            }),
        );

        const candidateProfiles = profiles.filter(
            isCandidateProfile,
        ) as CandidateProfileType[];

        return candidateProfiles;
    };

    const candidates = await candidatesFN();

    const jobs = await fetchRecruiterJobs(recruiterId);
    const job: FetchedRecruiterJobsType = jobs.filter(
        (job) => job._id === jobId,
    )[0];

    return (
        <GlobalProvider job={job} candidates={candidates}>
            <ApplicationsClientPage />
        </GlobalProvider>
    );
}

export default ApplicationsPage;
