import { currentUser } from "@clerk/nextjs/server";
import { GlobalProvider } from "./Context";
import Client from "./Client";
import { fetchProfile } from "@/actions/onboard";

async function AccountPage() {
    const user = await currentUser();

    if (!user) return;

    const profile = await fetchProfile(user.id);

    const data = { user: JSON.parse(JSON.stringify(user)), profile };

    return (
        <GlobalProvider {...data}>
            <Client />
        </GlobalProvider>
    );
}

export default AccountPage;
