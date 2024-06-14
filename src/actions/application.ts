"sue server";

import { JobApplicationType } from "@/app/jobs/Components/JobCards/ApplyBtn";
import Application from "@/models/application";
import { revalidatePath } from "next/cache";

export async function applyJob(data: JobApplicationType) {
    await Application.create(data);
    revalidatePath("/jobs");
}

export async function fetchApplicationsOfCandidate(candidateId: string) {
    const result = await Application.find({ candidateId });
    return JSON.parse(JSON.stringify(result));
}

export async function fetchApplicationsOfRecruiter(recruiterId: string) {
    const result = await Application.find({ recruiterId });
    return JSON.parse(JSON.stringify(result));
}
