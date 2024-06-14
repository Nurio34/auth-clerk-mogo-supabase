import { fetchProfile } from "@/actions/onboard";
import Onboard, { UserProfileType } from "./Components/Onboard";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { RecruiterFormType } from "./Components/Forms/RecruiterForm";
import { CandidateFormType } from "./Components/Forms/CanditateForm";

export type RecruiterProfileType = UserProfileType & {
    recruiterInfo: RecruiterFormType;
};
export type CandidateProfileType = UserProfileType & {
    candidateInfo: CandidateFormType;
};

async function OnboardPage() {
    const user = await currentUser();
    const userId = user?.id!;
    let profile = await fetchProfile(userId);

    //** --- IF USER HAVE "PROFILE", ...... */
    if (profile) {
        //** --- IF USER IS "RECRUITER", ... */
        if (profile.role === "recruiter") {
            //** */ --- IF USER IS NOT A "PREMIUM USER" --- //
            if (!profile.isPremiumUser) {
                redirect("/membership");
            }
            //** */ ------------------------------------ //
        }
        //** */ ------------------------------------ //

        //** --- IF USER IS "CANDIDATE" --- */
        else if (profile.role === "candidate") {
            redirect("/");
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
