import { currentUser } from "@clerk/nextjs/server";
import { fetchProfile } from "@/actions/onboard";
import { UserProfileType } from "../onboard/Components/Onboard";
import JobsClientPage from "./Client";
import {
    fetchApplicationsOfCandidate,
    fetchApplicationsOfRecruiter,
} from "@/actions/application";
import { JobApplicationType } from "./Components/JobCards/ApplyBtn";
import {
    FetchedRecruiterJobsType,
    fetchCanidateJobs,
    fetchRecruiterJobs,
} from "@/actions/job";
import { GlobalProvider } from "./Context";

async function JobsPage() {
    const user = await currentUser();

    let profile: UserProfileType | null = null;
    let applications: JobApplicationType[] | null = null;
    let jobList: FetchedRecruiterJobsType[] | null = null;

    if (!user) {
        return;
    }

    profile = await fetchProfile(user.id);

    if (profile.role === "recruiter") {
        applications = await fetchApplicationsOfRecruiter(profile.userId!);
        jobList = await fetchRecruiterJobs(user?.id);
    } else if (profile.role === "candidate") {
        applications = await fetchApplicationsOfCandidate(profile.userId!);
        jobList = await fetchCanidateJobs();
    }

    return (
        <GlobalProvider
            user={JSON.parse(JSON.stringify(user))}
            profile={profile}
            applications={applications}
            jobList={jobList}
        >
            <JobsClientPage />
        </GlobalProvider>
    );
}

export default JobsPage;
