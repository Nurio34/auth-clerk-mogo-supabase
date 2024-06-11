"use client";

import { useState } from "react";
import Menu from "./Components/Menu";
import MenuOpenBtn from "./Components/MenuOpenBtn";
import MenuContainerLg from "../MenuContainerLg";

function MenuContainerSm() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <>
            <div className="lg:hidden">
                <MenuOpenBtn setIsMenuOpen={setIsMenuOpen} />
                <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div>
            <div className="hidden lg:flex justify-between items-center">
                <div
                    className=" font-bold text-2xl"
                    style={{ fontVariant: "small-caps" }}
                >
                    job portal
                </div>
                <MenuContainerLg />
            </div>
        </>
    );
}

export default MenuContainerSm;
