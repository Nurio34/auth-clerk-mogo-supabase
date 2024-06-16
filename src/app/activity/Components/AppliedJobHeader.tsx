import React from "react";
import { AppliedJobsIncludingStatusType } from "../Client";

function AppliedJobHeader({
    appliedJob,
}: {
    appliedJob: AppliedJobsIncludingStatusType;
}) {
    return (
        <li className="grid grid-cols-[repeat(auto-fit,minmax(60px,1fr))] gap-[1vw] shadow-sm shadow-primary py-[1vh] px-[2vw] rounded-md ">
            <div
                className=" font-semibold capitalize text-center"
                style={{ fontVariant: "small-caps" }}
            >
                title
            </div>
            <div
                className=" font-semibold capitalize text-center "
                style={{ fontVariant: "small-caps" }}
            >
                company name
            </div>
            <div
                className=" font-semibold capitalize text-center hidden md:block"
                style={{ fontVariant: "small-caps" }}
            >
                description
            </div>
            <div
                className=" font-semibold capitalize text-center hidden md:block"
                style={{ fontVariant: "small-caps" }}
            >
                experience
            </div>
            <div
                className=" font-semibold capitalize text-center hidden md:block"
                style={{ fontVariant: "small-caps" }}
            >
                location
            </div>
            <div
                className=" font-semibold capitalize text-center"
                style={{ fontVariant: "small-caps" }}
            >
                skills
            </div>

            <div
                className=" font-semibold capitalize text-center hidden md:block"
                style={{ fontVariant: "small-caps" }}
            >
                type
            </div>
        </li>
    );
}
export default AppliedJobHeader;
