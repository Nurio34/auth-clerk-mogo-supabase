"use server";

import { CandidateApplicationStatusType } from "@/app/applications/[id]/Components/CandidateProfileModal";
import { JobApplicationType } from "@/app/jobs/Components/JobCards/ApplyBtn";
import connectDB from "@/db";
import ApplicationModel from "@/models/application";
import { revalidatePath } from "next/cache";

export async function applyJob(formData: any) {
    const FormData = Object.fromEntries(
        Object.entries(Object.fromEntries(formData)).filter(([key, value]) => {
            return value !== "";
        }),
    );
    await connectDB();

    await ApplicationModel.create(FormData);
    revalidatePath("/jobs");

    return { success: true };
}

export async function fetchApplicationsOfCandidate(
    candidateId: string,
): Promise<JobApplicationType[]> {
    await connectDB();

    const result = await ApplicationModel.find({ candidateId });

    return JSON.parse(JSON.stringify(result));
}

export async function fetchApplicationsOfRecruiter(
    recruiterId: string,
): Promise<JobApplicationType[]> {
    await connectDB();

    const result = await ApplicationModel.find({ recruiterId });
    return JSON.parse(JSON.stringify(result));
}

export async function updateSelectedApplication(
    jobId: string,
    candidateId: string,
    state: CandidateApplicationStatusType,
) {
    await connectDB();

    const application: JobApplicationType | null =
        await ApplicationModel.findOne({ jobId, candidateId });

    if (!application) return;

    const status = [...application.status, state];

    const result = await ApplicationModel.findOneAndUpdate(
        { jobId, candidateId },
        { status },
        { new: true, runValidators: true },
    );
    revalidatePath("/applications");
}

export async function jobApplicationOfTheCandidate(
    jobId: string,
    candidateId: string,
): Promise<JobApplicationType> {
    await connectDB();
    const result = await ApplicationModel.findOne({ jobId, candidateId });

    return JSON.parse(JSON.stringify(result));
}
