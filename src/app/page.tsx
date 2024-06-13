import { fetchProfile } from "@/actions/onboard";
import connectDB from "@/db";
import { currentUser } from "@clerk/nextjs/server";
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
            return <div>Hello {user?.firstName}</div>;
        }
        //** -------------------------------------- */
    }
    //** -------------------------------------- */
}
