import { UserProfileType } from "@/app/onboard/Components/Onboard";
import { CandidateProfileType, RecruiterProfileType } from "@/app/onboard/page";

//! --- TYPE GUARD FOR "RECRUITER" --- //
export function isRecruiterProfile(
    profile: UserProfileType,
): profile is RecruiterProfileType {
    return profile.role === "recruiter";
}
//! ---------------------------------- //

//! --- TYPE GUARD FOR "CANDIDATE" --- //
export function isCandidateProfile(
    profile: UserProfileType,
): profile is CandidateProfileType {
    return profile.role === "candidate";
}
//! ---------------------------------- //
