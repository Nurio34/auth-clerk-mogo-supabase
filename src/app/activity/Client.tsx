"use client";

import { CandidateApplicationStatusType } from "../applications/[id]/Components/CandidateProfileModal";
import AppliedJobCard from "./Components/AppliedJobCard";
import AppliedJobHeader from "./Components/AppliedJobHeader";
import FilterBtns from "./Components/FilterBtns";
import { useGlobalContext } from "./ContextProvider";

export type AppliedJobsIncludingStatusType = {
    status: CandidateApplicationStatusType[];
    companyName: string;
    title: string;
    type: string;
    location: string;
    experience: string;
    description: string;
    skills: string;
    _id: string;
    recruiterId: string;
    applicants: {
        name: string;
        email: string;
        userId: string;
        status: string;
    }[];
};

function ActivityClientPage() {
    const { candidateId, jobs, applications } = useGlobalContext();

    const jobsIdsOfAppliedJobs = applications.map(
        (application) => application.jobId,
    );

    const appliedJobs = jobs.filter((job) =>
        jobsIdsOfAppliedJobs.includes(job._id),
    );

    const appliedJobsIncludingStatus = appliedJobs.map((appliedJob) => {
        const application = applications.filter(
            (application) => application.jobId === appliedJob._id,
        )[0];
        return { ...appliedJob, status: application.status };
    });

    return (
        <main className="py-[2vh] px-[4vw]">
            <header className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap md:flex-nowrap gap-[1vh]">
                <h2
                    className=" font-semibold text-lg capitalize grow text-center md:grow-0 md:text-start "
                    style={{ fontVariant: "small-caps" }}
                >
                    my applications
                </h2>
                <FilterBtns />
            </header>
            <section className="py-[2vh] px-[4vw] max-w-[1200px] mx-auto min-h-96 md:min-h-[1000px]">
                <AppliedJobHeader appliedJob={appliedJobsIncludingStatus[0]} />

                <ul className="grid gap-[2vh] my-[2vh]">
                    {appliedJobsIncludingStatus.map((appliedJob) => {
                        return (
                            <AppliedJobCard
                                key={appliedJob._id}
                                appliedJob={appliedJob}
                            />
                        );
                    })}
                </ul>
            </section>
        </main>
    );
}

export default ActivityClientPage;
