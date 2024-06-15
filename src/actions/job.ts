"use server";

import { JobFormType } from "@/app/jobs/Components/JobCreateModal";
import JobModel from "@/models/job";
import { revalidatePath } from "next/cache";

export const createJob = async (
    data: JobFormType & { recruiterId: string | undefined },
) => {
    await JobModel.create(data);
    revalidatePath("/jobs");
};

export type FetchedRecruiterJobsType = JobFormType & {
    _id: string;
    recruiterId: string;
    applicants: {
        name: string;
        email: string;
        userId: string;
        status: string;
    }[];
};

export const fetchRecruiterJobs = async (
    recruiterId: string,
): Promise<FetchedRecruiterJobsType[]> => {
    const jobs = await JobModel.find({ recruiterId });

    return JSON.parse(JSON.stringify(jobs));
};

export const fetchCanidateJobs = async (): Promise<
    FetchedRecruiterJobsType[]
> => {
    const jobs = await JobModel.find();

    return JSON.parse(JSON.stringify(jobs));
};
