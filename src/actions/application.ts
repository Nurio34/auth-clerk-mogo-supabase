"use server";

import { JobApplicationType } from "@/app/jobs/Components/JobCards/ApplyBtn";
import ApplicationModel from "@/models/application";
import { revalidatePath } from "next/cache";

export async function applyJob(formData: any) {
    const FormData = Object.fromEntries(
        Object.entries(Object.fromEntries(formData)).filter(([key, value]) => {
            return value !== "";
        }),
    );

    await ApplicationModel.create(FormData);
    revalidatePath("/jobs");

    return { success: true };
}

export async function fetchApplicationsOfCandidate(
    candidateId: string,
): Promise<JobApplicationType[]> {
    const result = await ApplicationModel.find({ candidateId });

    return JSON.parse(JSON.stringify(result));
}

export async function fetchApplicationsOfRecruiter(
    recruiterId: string,
): Promise<JobApplicationType[]> {
    const result = await ApplicationModel.find({ recruiterId });
    return JSON.parse(JSON.stringify(result));
}
