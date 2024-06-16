import { regulatedSkills } from "@/utils/regulatedSkills";
import { AppliedJobsIncludingStatusType } from "../Client";
import SkillImage from "@/app/jobs/Components/JobCards/SkillImage";
import { useGlobalContext } from "../ContextProvider";
import { AnimatePresence, motion } from "framer-motion";

function AppliedJobCard({
    appliedJob,
}: {
    appliedJob: AppliedJobsIncludingStatusType;
}) {
    const { filterBy } = useGlobalContext();
    const isAppliedJobIncludesFilterType = appliedJob.status.includes(filterBy);

    const status = appliedJob.status;
    return (
        <>
            {isAppliedJobIncludesFilterType && (
                <motion.li
                    className={`grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] items-center gap-[1vw] shadow-sm py-[1vh] px-[2vw] rounded-md
                    ${
                        status.includes("Selected")
                            ? " shadow-success"
                            : status.includes("Rejected")
                            ? " shadow-error"
                            : " shadow-secondary"
                    }
                `}
                    layout
                >
                    <div
                        className=" text-center truncate"
                        title={appliedJob.title}
                    >
                        {appliedJob.title}
                    </div>
                    <div className=" text-center ">
                        {appliedJob.companyName}
                    </div>
                    <div
                        className=" text-center truncate hidden md:block"
                        title={appliedJob.description}
                    >
                        {appliedJob.description}
                    </div>
                    <div className=" text-center hidden md:block">
                        {appliedJob.experience}
                    </div>
                    <div className=" text-center hidden md:block">
                        {appliedJob.location}
                    </div>
                    <div className=" text-center flex gap-[4px] flex-wrap justify-center items-center">
                        {regulatedSkills(appliedJob.skills).map((skill) => (
                            <SkillImage key={skill} skill={skill!} />
                        ))}
                    </div>
                    <div className=" text-center hidden md:block">
                        {appliedJob.type}
                    </div>
                </motion.li>
            )}
        </>
    );
}

export default AppliedJobCard;
