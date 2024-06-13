import { fetchProfile } from "@/actions/onboard";
import Onboard, { UserProfileType } from "./Components/Onboard";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { RecruiterFormType } from "./Components/Forms/RecruiterForm";
import { CandidateFormType } from "./Components/Forms/CanditateForm";

async function OnboardPage() {
    const user = await currentUser();
    const userId = user?.id!;
    let profile = await fetchProfile(userId);

    //! --- TYPE GUARD FOR "RECRUITER" --- //
    function isRecruiterProfile(
        profile: UserProfileType,
    ): profile is UserProfileType & { recruiterInfo: RecruiterFormType } {
        return profile.role === "recruiter";
    }
    //! --------------------------------- //

    //! --- TYPE GUARD FOR "CANDIDATE" --- //
    function isCandidateProfile(
        profile: UserProfileType,
    ): profile is UserProfileType & { candidateInfo: CandidateFormType } {
        return profile.role === "candidate";
    }
    //! --------------------------------- //

    //** --- IF USER HAVE "PROFILE", ...... */
    if (profile) {
        //** --- IF USER IS "RECRUITER", ... */
        if (isRecruiterProfile(profile)) {
            //** */ --- IF USER IS NOT A "PREMIUM USER" --- //
            if (!profile.isPremiumUser) {
                redirect("/membership");
            }
            //** */ ------------------------------------ //
        }
        //** */ ------------------------------------ //

        //** --- IF USER IS "CANDIDATE" --- */
        else if (isCandidateProfile(profile)) {
        }
        //** */ ------------------------------------ //
    }
    //** --------------------------------- */

    //** --- IF USER DOESN "NOT" HAVE "PROFILE", STAY IN PAGE */
    else {
        return (
            <main>
                <Onboard />
            </main>
        );
    }
    //** ------------------------------------------------------ */
}

export default OnboardPage;
