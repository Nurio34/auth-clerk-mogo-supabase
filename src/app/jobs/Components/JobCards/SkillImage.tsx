import Image from "next/image";

function SkillImage({ skill }: { skill: string }) {
    return (
        <Image
            src={`/tech_icons/${skill}.webp`}
            alt={skill}
            title={skill}
            width={24}
            height={24}
        />
    );
}

export default SkillImage;
