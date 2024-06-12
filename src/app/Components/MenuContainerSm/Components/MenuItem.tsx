import Link from "next/link";
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

    return (
        <button onClick={handleMenuItemClick}>
            <Link
                href={menuItem.to}
                className=" capitalize font-semibold text-lg"
                style={{ fontVariant: "small-caps" }}
            >
                {menuItem.label}
            </Link>
        </button>
    );
}

export default MenuItem;
