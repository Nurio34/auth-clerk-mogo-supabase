import { fetchProfile } from "@/actions/onboard";
import connectDB from "@/db";
import { isCandidateProfile, isRecruiterProfile } from "@/utils/typeGuard";
import { currentUser } from "@clerk/nextjs/server";
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
                return <div>Hello {profile.recruiterInfo.currentCompany}</div>;
            }
            //** --------------------------- */

            //** --- IF USER IS "RECRUITER" */
            else if (isCandidateProfile(profile)) {
                return (
                    <>
                        <div> Hello {profile.candidateInfo.resume}</div>;
                        <Link href="https://nojyjnmzufnnliqaszws.supabase.co/storage/v1/object/sign/Candidate_Resumes/public/cv.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJDYW5kaWRhdGVfUmVzdW1lcy9wdWJsaWMvY3YucGRmIiwiaWF0IjoxNzE4MzM0ODY5LCJleHAiOjE3MTg5Mzk2Njl9.k0CIO6rY7lKq_Q469XFW8BVw5g8bPGPE0dcn18uzNeE&t=2024-06-14T03%3A14%3A29.715Z">
                            Link
                        </Link>
                    </>
                );
            }
            //** --------------------------- */
        }
        //** -------------------------------------- */
    }
    //** -------------------------------------- */
}
