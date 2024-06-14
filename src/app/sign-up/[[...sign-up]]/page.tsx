import { SignUp } from "@clerk/nextjs";

function SignupPage() {
    return (
        <main className=" min-h-96 flex">
            <section className="py-[2vh] mx-auto">
                <SignUp />
            </section>
        </main>
    );
}

export default SignupPage;
