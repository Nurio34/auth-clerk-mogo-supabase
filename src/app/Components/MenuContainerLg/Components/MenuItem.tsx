"use client";

import Link from "next/link";
import { MenuItemType } from "../../MenuContainerSm/Components/MenuItem";
import { usePathname } from "next/navigation";

function MenuItem({ menuItem }: { menuItem: MenuItemType }) {
    const pathname = usePathname();

    return (
        <Link
            href={menuItem.to}
            className={`btn btn-sm btn-base-300 capitalize
                ${
                    pathname === menuItem.to &&
                    "bg-primary text-primary-content scale-105"
                }
                ${pathname !== menuItem.to && "hover:bg-accent hover:scale-110"}
                `}
        >
            {menuItem.label}
        </Link>
    );
}

export default MenuItem;
