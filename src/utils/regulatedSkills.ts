export const regulatedSkills = (skills: string) => {
    return skills.split(",").map((skill: string) => {
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
};
