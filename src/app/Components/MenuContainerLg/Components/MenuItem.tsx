import Link from "next/link";
import { MenuItemType } from "../../MenuContainerSm/Components/MenuItem";

function MenuItem({ menuItem }: { menuItem: MenuItemType }) {
    return (
        <Link
            href={menuItem.to}
            className="btn btn-sm btn-secondary capitalize"
        >
            {menuItem.label}
        </Link>
    );
}

export default MenuItem;
