import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import hero from "../../public/hero.webp";
import Buttons from "./Components/Buttons";

export default async function Home() {
    const user = await currentUser();
    const userId = user?.id;

    return (
        <main>
            <section className="grid grid-cols-2 max-w-[1024px] mx-auto py-[4vh] px-[4vw]">
                <article className="grid  place-content-center gap-y-[2vh] pr-[6vw] ">
                    <p>___ One Stop Solution to Find Jobs and Employes</p>
                    <h1 className=" font-bold text-5xl ">
                        The Best Job Portal App
                    </h1>
                    <p>
                        Find Best Jobs From Top Product Based Companies and
                        Build Your Career
                    </p>
                    <Buttons userId={userId} />
                </article>
                <figure className=" aspect-square relative">
                    <Image src={hero} alt="hero" fill />
                </figure>
            </section>
        </main>
    );
}
