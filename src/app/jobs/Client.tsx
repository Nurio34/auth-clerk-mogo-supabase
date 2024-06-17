"use client";

import JobList from "./Components/JobList";
import JobsInteractionPage from "./Components/JobsInteraction";

function JobsClientPage() {
    return (
        <main className="py-[2vh] px-[4vw]">
            <JobsInteractionPage />
            <JobList />
        </main>
    );
}

export default JobsClientPage;
