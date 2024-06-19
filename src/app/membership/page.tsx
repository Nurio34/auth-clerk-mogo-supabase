import membershipPlans from "@/utils/membershipPlans";

import MembershipCard from "./Components/MembershipCard";

function MembershipPage() {
    return (
        <main className="py-[2vh] px-[4vw]">
            <h1
                className="font-bold text-xl"
                style={{ fontVariant: "small-caps" }}
            >
                Select Membership
            </h1>
            <section className=" grid md:grid-cols-3 mx-auto gap-[4vw] py-[2vh] px-[4vw] max-w-[400px] md:max-w-[1024px]">
                {membershipPlans.map((plan) => {
                    return <MembershipCard key={plan.type} plan={plan} />;
                })}
            </section>
        </main>
    );
}

export default MembershipPage;
