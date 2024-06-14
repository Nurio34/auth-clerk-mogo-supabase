import { FetchedRecruiterJobsType } from "@/actions/job";
import { VscGitStashApply } from "react-icons/vsc";

function ShowApplicantsBtn({ job }: { job: FetchedRecruiterJobsType }) {
    return (
        <button className=" flex items-center gap-[2vw] shadow-sm bg-orange-600 rounded-md p-[1vh]">
            <div className="w-6">
                <VscGitStashApply size={24} color="white" />
            </div>
            <p className=" text-white">{job.applicants.length} Applicants</p>
        </button>
    );
}

export default ShowApplicantsBtn;
