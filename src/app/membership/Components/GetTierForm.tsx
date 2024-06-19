import { getMembership } from "@/actions/membership";
import { MembershipPlanType } from "@/utils/membershipPlans";

async function GetTierForm({ plan }: { plan: MembershipPlanType }) {
    return (
        <form action={getMembership} className=" w-full">
            <input
                type="hidden"
                name="heading"
                value={plan.heading}
                id="heading"
            />
            <input type="hidden" name="type" value={plan.type} id="type" />
            <input type="hidden" name="price" value={plan.price} id="price" />
            <button type="submit" className="btn btn-secondary w-full">
                Get {plan.heading}
            </button>
        </form>
    );
}

export default GetTierForm;
