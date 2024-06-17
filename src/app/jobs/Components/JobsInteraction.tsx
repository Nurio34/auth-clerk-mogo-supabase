import ActionBtn from "./ActionBtn";
import JobCreateModal from "./JobCreateModal";
import { useGlobalContext } from "../Context";

function JobsInteractionPage() {
    const { profile } = useGlobalContext();

    if (profile === null) {
        return;
    } else {
        return (
            <header className="flex justify-between items-center flex-wrap md:flex-nowrap gap-y-[1vh]">
                <h1
                    className=" font-semibold text-xl grow md:grow-0 text-center"
                    style={{ fontVariant: "small-caps" }}
                >
                    {profile.role === "recruiter"
                        ? "Your Job List"
                        : "Explore All Jobs"}
                </h1>
                <ActionBtn />
                <JobCreateModal />
            </header>
        );
    }
}

export default JobsInteractionPage;
