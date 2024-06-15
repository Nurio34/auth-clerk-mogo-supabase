"use server";

import connectDB from "@/db";
import { UserProfileType } from "@/app/onboard/Components/Onboard";
import { revalidatePath } from "next/cache";
import ProfileModel from "@/models/profile";
import { CandidateProfileType, RecruiterProfileType } from "@/app/onboard/page";
export async function createProfile(
    formData: RecruiterProfileType | CandidateProfileType,
) {
    //** --- SAVE "FORMDATA" TO "MONGODB" */
    await connectDB();
    await ProfileModel.create(formData);

    //** -------------------------------- */

    revalidatePath("/onBoard");
    revalidatePath("/jobs");
}

export async function fetchProfile(userId: string): Promise<UserProfileType> {
    const userProfile = await ProfileModel.findOne({ userId });

    return JSON.parse(JSON.stringify(userProfile));
}
