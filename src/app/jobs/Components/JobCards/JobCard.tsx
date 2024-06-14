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
import ApplyBtn from "./ApplyBtn";
import ShowApplicantsBtn from "./ShowApplicantsBtn";

function JobCard({
    job,
    profile,
}: {
    job: FetchedRecruiterJobsType;
    profile: UserProfileType;
}) {
    const { skills } = job; // [html,css,javascript,tailwind,react,next,clerk,mongo]

    const regulatedSkills = skills.split(",").map((skill: string) => {
        if (skill.toLocaleLowerCase().includes("html")) {
            return "html";
        } else if (skill.toLocaleLowerCase().includes("css")) {
            return "css";
        } else if (skill.toLocaleLowerCase().includes("javascript")) {
            return "javascript";
        } else if (skill.toLocaleLowerCase().includes("tailwind")) {
            return "tailwind";
        } else if (skill.toLocaleLowerCase().includes("react")) {
            return "react";
        } else if (skill.toLocaleLowerCase().includes("next")) {
            return "next";
        } else if (skill.toLocaleLowerCase().includes("clerk")) {
            return "clerk";
        } else if (skill.toLocaleLowerCase().includes("mongo")) {
            return "mongo";
        }
    });

    return (
        <li
            className=" shadow-md shadow-secondary rounded-md py-[1vh] px-[2vw] bg-[rgba(255,255,255,0.9)]
            grid gap-y-[1vh]
        "
        >
            <h3 className="flex items-center gap-[2vw] shadow-sm">
                <div className="w-6 bg-green-500 rounded-full">
                    <MdMyLocation size={24} color="white" />
                </div>
                <p className=" font-semibold">{job.title}</p>
            </h3>
            <p className=" flex items-center gap-[2vw] shadow-sm">
                <div className="w-6 bg-blue-300">
                    <MdOutlineLocationCity size={24} />
                </div>
                <p>{job.companyName}</p>
            </p>
            <p className=" flex items-center gap-[2vw] shadow-sm">
                <div className="w-6">
                    <FaLocationDot size={24} color="blue" />
                </div>
                <p>{job.location}</p>
            </p>
            <p className=" flex items-center gap-[2vw] shadow-sm">
                <div className="w-6 bg-black">
                    <TbListDetails size={24} color="yellow" />
                </div>
                <p>{job.description}</p>
            </p>
            <p className=" flex items-center gap-[2vw] shadow-sm">
                <div className="w-6 ">
                    <MdBloodtype size={24} color="red" />
                </div>
                <p>{job.type}</p>
            </p>
            <p className=" flex items-center gap-[2vw] shadow-sm">
                <div className="w-6 bg-blue-700 rounded-full">
                    <AiOutlineDocker size={24} color="white" />
                </div>
                <p>{job.experience}</p>
            </p>
            <p className=" flex items-center gap-[2vw] shadow-sm">
                <div className="w-6 flex ">
                    <SiSkillshare size={24} />
                </div>
                <ul className="flex flex-wrap justify-start items-center gap-[1vw]">
                    {regulatedSkills.map((skill) => {
                        return <SkillImage key={skill} skill={skill!} />;
                    })}
                </ul>
            </p>
            {profile.role === "recruiter" && <ShowApplicantsBtn job={job} />}
            {profile.role === "candidate" && (
                <ApplyBtn job={job} profile={profile} />
            )}
        </li>
    );
}

export default JobCard;
