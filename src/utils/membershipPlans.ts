export type MembershipPlanType = {
    heading: string;
    price: number;
    type: string;
};

const membershipPlans = [
    { heading: "Tier 1", price: 100, type: "basic" },
    { heading: "Tier 2", price: 200, type: "teams" },
    { heading: "Tier 3", price: 600, type: "eneterprise" },
];

export default membershipPlans;
