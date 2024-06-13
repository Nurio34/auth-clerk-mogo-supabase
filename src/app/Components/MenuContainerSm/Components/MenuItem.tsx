import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";

export type MenuItemType = {
    to: string;
    label: string;
    show: boolean;
};

function MenuItem({
    menuItem,
    setIsMenuOpen,
}: {
    menuItem: MenuItemType;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
    const handleMenuItemClick = () => {
        setIsMenuOpen(false);
    };

    const pathname = usePathname();

    return (
        <Link
            href={menuItem.to}
            className={`capitalize font-semibold text-lg w-full block px-[1vw]
                    ${pathname !== menuItem.to && "hover:bg-accent"}
                    ${pathname === menuItem.to && "bg-secondary"}
                `}
            style={{ fontVariant: "small-caps" }}
            onClick={handleMenuItemClick}
        >
            {menuItem.label}
        </Link>
    );
}

export default MenuItem;
