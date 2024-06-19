"use server";

import { ProfileType } from "@/app/onboard/Components/Onboard";
import { redirect } from "next/navigation";

export const leftBtnAction = async (formData: any) => {
    const role: ProfileType = formData.get("role");

    if (role === "candidate") {
        redirect("/jobs");
    } else {
        redirect("/jobs?isOpen=true");
    }
};
export const rightBtnAction = async (formData: any) => {
    const role: ProfileType = formData.get("role");

    if (role === "candidate") {
        redirect("/activity");
    } else {
        redirect("/jobs");
    }
};
