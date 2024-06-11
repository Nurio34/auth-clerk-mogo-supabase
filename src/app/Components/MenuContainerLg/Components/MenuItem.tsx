import Link from "next/link";
import { MenuItemType } from "../../MenuContainerSm/Components/MenuItem";

function MenuItem({ menuItem }: { menuItem: MenuItemType }) {
    return (
        <li>
            <Link href={menuItem.to} className="btn btn-sm btn-secondary">
                {menuItem.label}
            </Link>
        </li>
    );
}

export default MenuItem;
