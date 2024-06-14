import { currentUser } from "@clerk/nextjs/server";
import JobsInteraction from "./Components/JobsInteraction";
import { fetchProfile } from "@/actions/onboard";
import { UserProfileType } from "../onboard/Components/Onboard";
import JobList from "./Components/JobList";

async function JobsPage() {
    const user = await currentUser();

    let profile: UserProfileType | null = null;

    if (!user) {
        return;
    }

    profile = await fetchProfile(user.id);

    return (
        <main className="py-[2vh] px-[4vw]">
            <JobsInteraction
                user={JSON.parse(JSON.stringify(user))}
                profile={profile}
            />
            <JobList
                user={JSON.parse(JSON.stringify(user))}
                profile={profile}
            />
        </main>
    );
}

export default JobsPage;
