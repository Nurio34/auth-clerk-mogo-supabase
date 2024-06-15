import { supabaseClient } from "@/supabase";
import { useGlobalContext } from "../../ContextProvider";
import Link from "next/link";

function ResumeBtn() {
    const { selectedCandidate } = useGlobalContext();

    const { data } = supabaseClient.storage
        .from("Candidate_Resumes")
        .getPublicUrl(selectedCandidate?.candidateInfo.resume!);

    const { publicUrl } = data;

    return (
        <a
            href={publicUrl}
            target="_blank"
            download={publicUrl}
            className="btn btn-info text-info-content"
            style={{ fontVariant: "small-caps" }}
        >
            Resume
        </a>
    );
}

export default ResumeBtn;
