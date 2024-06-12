import connectDB from "@/db";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
    const user = await currentUser();
    await connectDB();

    if (!user) return <div>Not signed in</div>;

    return <div>Hello {user?.firstName}</div>;
}
