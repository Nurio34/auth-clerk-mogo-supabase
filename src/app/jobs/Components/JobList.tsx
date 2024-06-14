import {
    FetchedRecruiterJobsType,
    fetchCanidateJobs,
    fetchRecruiterJobs,
} from "@/actions/job";
import { UserProfileType } from "@/app/onboard/Components/Onboard";
import { User } from "@clerk/nextjs/server";
import JobCard from "./JobCards/JobCard";
import { fetchApplicationsOfCandidate } from "@/actions/application";

async function JobList({
    user,
    profile,
}: {
    user: User;
    profile: UserProfileType;
}) {
    let jobList: FetchedRecruiterJobsType[] | null = null;

    if (!user) {
        return;
    } else {
        if (profile.role === "recruiter") {
            jobList = await fetchRecruiterJobs(user?.id);

            return (
                <section
                    className="my-[2vh] py-[2vh] px-[4vw] rounded-lg"
                    style={{
                        backgroundImage: `url('/wallpaper.webp')`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        borderImageSource:
                            "linear-gradient(45deg,rgba(255,255,255,0.5),rgba(0,0,0,0.5))",
                        borderStyle: "solid",
                        borderImageSlice: "fill 1",
                    }}
                >
                    <ul className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] items-start gap-[2vw] ">
                        {jobList.map((job) => {
                            return (
                                <JobCard
                                    key={job.title}
                                    job={job}
                                    profile={profile}
                                />
                            );
                        })}
                    </ul>
                </section>
            );
        } else {
            jobList = await fetchCanidateJobs();
            const jobApplications = await fetchApplicationsOfCandidate(user.id);
            console.log(jobApplications);
            return (
                <ul className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] items-start justify-start gap-[2vw] py-[2vh]">
                    {jobList.map((job) => {
                        return (
                            <JobCard
                                key={job.title}
                                job={job}
                                profile={profile}
                            />
                        );
                    })}
                </ul>
            );
        }
    }
}

export default JobList;
