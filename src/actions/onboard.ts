"use server";

import connectDB from "@/db";
import { UserProfileType } from "@/app/onboard/Components/Onboard";
import Profile from "@/models";
import { revalidatePath } from "next/cache";
import { RecruiterFormType } from "@/app/onboard/Components/Forms/RecruiterForm";
import { CandidateFormType } from "@/app/onboard/Components/Forms/CanditateForm";

export async function createProfile(
    formData:
        | (UserProfileType & { recruiterInfo: RecruiterFormType })
        | (UserProfileType & { candidateInfo: CandidateFormType }),
) {
    await connectDB();
    await Profile.create(formData);
    revalidatePath("/onBoard");
}

export async function fetchProfile(userId: string): Promise<UserProfileType> {
    await connectDB();
    const userProfile = await Profile.findOne({ userId });

    return JSON.parse(JSON.stringify(userProfile));
}
