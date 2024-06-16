import { fetchCanidateJobs } from "@/actions/job";
import ActivityClientPage from "./Client";
import { ContextProvider } from "./ContextProvider";
import { currentUser } from "@clerk/nextjs/server";
import { fetchApplicationsOfCandidate } from "@/actions/application";

async function ActivityPage() {
    const user = await currentUser();
    const candidateId = user?.id;

    const jobs = await fetchCanidateJobs();

    const applications = await fetchApplicationsOfCandidate(candidateId!);

    return (
        <ContextProvider
            candidateId={candidateId!}
            jobs={jobs}
            applications={applications}
        >
            <ActivityClientPage />
        </ContextProvider>
    );
}

export default ActivityPage;
