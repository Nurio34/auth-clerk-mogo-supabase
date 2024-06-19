"use client";

import { useGlobalContext } from "./Context";
import RecruiterForm from "./Forms/RecruiterForm";
import CandidateForm from "./Forms/CandidateForm";

function AccountClientPage() {
    const { profile } = useGlobalContext();

    const role = profile.role;

    return (
        <main className="py-[2vh]">
            {role === "recruiter" ? <RecruiterForm /> : <CandidateForm />}
        </main>
    );
}

export default AccountClientPage;
