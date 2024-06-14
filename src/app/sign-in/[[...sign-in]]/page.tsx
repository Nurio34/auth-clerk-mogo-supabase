import { SignIn } from "@clerk/nextjs";
import React from "react";

function SigninPage() {
    return (
        <main className=" min-h-96 flex">
            <section className="py-[2vh] mx-auto">
                <SignIn />
            </section>
        </main>
    );
}

export default SigninPage;
