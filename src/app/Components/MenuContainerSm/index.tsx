"use client";

import { useEffect, useState } from "react";
import Menu from "./Components/Menu";
import MenuOpenBtn from "./Components/MenuOpenBtn";

function MenuContainerSm({ menuItems }: any) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleMenu = () => {
            const screenWith = window.innerWidth;
            if (screenWith >= 1024) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleMenu);

        return () => window.removeEventListener("resize", handleMenu);
    });

    return (
        <>
            <MenuOpenBtn setIsMenuOpen={setIsMenuOpen} />
            <Menu
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                menuItems={menuItems}
            />
        </>
    );
}

export default MenuContainerSm;
