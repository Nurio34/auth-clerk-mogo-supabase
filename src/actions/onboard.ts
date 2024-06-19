"use server";

import connectDB from "@/db";
import { ProfileType, UserProfileType } from "@/app/onboard/Components/Onboard";
import { revalidatePath } from "next/cache";
import ProfileModel from "@/models/profile";
import { CandidateProfileType, RecruiterProfileType } from "@/app/onboard/page";
import { RecruiterFormType } from "@/app/onboard/Components/Forms/RecruiterForm";
import { CandidateFormType } from "@/app/onboard/Components/Forms/CanditateForm";

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
    await connectDB();

    const userProfile = await ProfileModel.findOne({ userId });

    return JSON.parse(JSON.stringify(userProfile));
}

export async function updateProfile(
    userId: string,
    role: ProfileType,
    formData: RecruiterFormType | CandidateFormType,
) {
    await connectDB();

    if (role === "recruiter") {
        await ProfileModel.findOneAndUpdate(
            { userId },
            { recruiterInfo: formData },
            { new: true, runValidators: true },
        );
        revalidatePath("/account");
    } else {
        await ProfileModel.findOneAndUpdate(
            { userId },
            { candidateInfo: formData },
            { new: true, runValidators: true },
        );
    }
}
