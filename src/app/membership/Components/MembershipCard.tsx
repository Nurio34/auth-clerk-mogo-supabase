import { MembershipPlanType } from "@/utils/membershipPlans";
import Image from "next/image";
import rocket from "@/../public/rocket.webp";
import GetTierForm from "./GetTierForm";

function MembershipCard({ plan }: { plan: MembershipPlanType }) {
    return (
        <article className=" shadow-lg shadow-secondary py-[2vh] px-[2vw] rounded-lg space-y-[1vw]">
            <div className="flex justify-between items-center">
                <figure className=" relative w-[90px] aspect-square">
                    <Image src={rocket} alt="rocket" fill />
                </figure>
                <p
                    className=" font-bold text-xl"
                    style={{ fontVariant: "small-caps" }}
                >
                    {plan.heading}
                </p>
            </div>
            <p className="flex items-center">
                <span className=" text-xs">$</span>
                <span className=" font-semibold">{plan.price}</span>
                <span className=" text-lg">/</span>
                <span className=" text-xs">year</span>
            </p>
            <GetTierForm plan={plan} />
        </article>
    );
}

export default MembershipCard;
