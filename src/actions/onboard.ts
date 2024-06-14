"use server";

import connectDB from "@/db";
import { UserProfileType } from "@/app/onboard/Components/Onboard";
import { revalidatePath } from "next/cache";
import { RecruiterFormType } from "@/app/onboard/Components/Forms/RecruiterForm";
import { CandidateFormType } from "@/app/onboard/Components/Forms/CanditateForm";
import ProfileModel from "@/models/profile";
export async function createProfile(
    formData:
        | (UserProfileType & { recruiterInfo: RecruiterFormType })
        | (UserProfileType & { candidateInfo: CandidateFormType }),
) {
    //** --- SAVE "FORMDATA" TO "MONGODB" */
    await connectDB();
    await ProfileModel.create(formData);

    //** -------------------------------- */

    revalidatePath("/onBoard");
}

export async function fetchProfile(userId: string): Promise<UserProfileType> {
    await connectDB();
    const userProfile = await ProfileModel.findOne({ userId });

    return JSON.parse(JSON.stringify(userProfile));
}
