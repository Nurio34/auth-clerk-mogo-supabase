import MenuItem from "./Components/MenuItem";

function MenuContainerLg({ menuItems }: any) {
    return (
        <ul className="flex gap-[1vw]">
            {menuItems.map((menuItem: any) => {
                return (
                    <li key={menuItem.label}>
                        {menuItem.show && <MenuItem menuItem={menuItem} />}
                    </li>
                );
            })}
        </ul>
    );
}

export default MenuContainerLg;
