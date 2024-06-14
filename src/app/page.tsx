import { fetchProfile } from "@/actions/onboard";
import connectDB from "@/db";
import { isCandidateProfile, isRecruiterProfile } from "@/utils/typeGuard";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
    const user = await currentUser();
    const userId = user?.id;

    //** --- IF USER IS "NOT AUTHENTICATED" --- */
    if (!userId) {
        return <h1>Welcome Job Portal</h1>;
    }
    //** -------------------------------------- */

    //** --- IF USER IS "NOT AUTHENTICATED" --- */
    else if (userId) {
        await connectDB();
        const profile = await fetchProfile(userId);

        //** --- IF USER DOES "NOT" HAVE "PROFILE" */
        if (!profile) {
            redirect("/onboard");
        }
        //** -------------------------------------- */

        //** --- IF USER DOES  HAVE "PROFILE" */
        else {
            //** --- IF USER IS "RECRUITER" */
            if (isRecruiterProfile(profile)) {
                return <div>Hello {profile.recruiterInfo.name}</div>;
            }
            //** --------------------------- */

            //** --- IF USER IS "RECRUITER" */
            else if (isCandidateProfile(profile)) {
                return (
                    <>
                        <div> Hello {profile.candidateInfo.name}</div>;
                    </>
                );
            }
            //** --------------------------- */
        }
        //** -------------------------------------- */
    }
    //** -------------------------------------- */
}
