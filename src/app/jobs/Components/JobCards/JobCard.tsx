import { FetchedRecruiterJobsType } from "@/actions/job";
import React from "react";
import { AiOutlineDocker } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import {
    MdBloodtype,
    MdMyLocation,
    MdOutlineLocationCity,
} from "react-icons/md";
import { SiSkillshare } from "react-icons/si";
import { TbListDetails } from "react-icons/tb";
import SkillImage from "./SkillImage";
import { UserProfileType } from "@/app/onboard/Components/Onboard";
import ApplyBtn, { JobApplicationType } from "./ApplyBtn";
import ShowApplicantsBtn from "./ShowApplicantsBtn";
import { regulatedSkills } from "@/utils/regulatedSkills";
import { motion } from "framer-motion";

function JobCard({
    job,
    profile,
    applications,
}: {
    job: FetchedRecruiterJobsType;
    profile: UserProfileType;
    applications: JobApplicationType[];
}) {
    const skills = job.skills; // [html,css,javascript,tailwind,react,next,clerk,mongo]

    return (
        <motion.li
            className=" shadow-md shadow-secondary rounded-md py-[1vh] px-[2vw] bg-base-300
            grid gap-y-[1vh]
        "
            key={job._id}
            layout
        >
            <h3 className="flex items-center gap-[2vw] shadow-sm">
                <span className="w-6 bg-green-500 rounded-full">
                    <MdMyLocation size={24} color="white" />
                </span>
                <span className=" font-semibold">{job.title}</span>
            </h3>
            <p className=" flex items-center gap-[2vw] shadow-sm">
                <span className="w-6 bg-blue-300">
                    <MdOutlineLocationCity size={24} />
                </span>
                <span>{job.companyName}</span>
            </p>
            <p className=" flex items-center gap-[2vw] shadow-sm">
                <span className="w-6">
                    <FaLocationDot size={24} color="blue" />
                </span>
                <span>{job.location}</span>
            </p>
            <p className=" flex items-center gap-[2vw] shadow-sm">
                <span className="w-6 bg-black">
                    <TbListDetails size={24} color="yellow" />
                </span>
                <span>{job.description}</span>
            </p>
            <p className=" flex items-center gap-[2vw] shadow-sm">
                <span className="w-6 ">
                    <MdBloodtype size={24} color="red" />
                </span>
                <span>{job.type}</span>
            </p>
            <p className=" flex items-center gap-[2vw] shadow-sm">
                <span className="w-6 bg-blue-700 rounded-full">
                    <AiOutlineDocker size={24} color="white" />
                </span>
                <span>{job.experience}</span>
            </p>
            <div className=" flex items-center gap-[2vw] shadow-sm">
                <span className="w-6 flex ">
                    <SiSkillshare size={24} />
                </span>
                <ul className="flex flex-wrap justify-start items-center gap-[1vw]">
                    {regulatedSkills(skills).map((skill) => {
                        return <SkillImage key={skill} skill={skill!} />;
                    })}
                </ul>
            </div>
            {profile.role === "recruiter" && (
                <ShowApplicantsBtn job={job} applications={applications} />
            )}
            {profile.role === "candidate" && (
                <ApplyBtn
                    job={job}
                    profile={profile}
                    applications={applications}
                />
            )}
        </motion.li>
    );
}

export default JobCard;
