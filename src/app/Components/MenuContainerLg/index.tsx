import MenuItem from "./Components/MenuItem";

function MenuContainerLg({ menuItems }: any) {
    const validMenuItems = menuItems.filter(
        (menuItem: any) => menuItem.show === true,
    );

    return (
        <ul className="flex gap-[1vw]">
            {validMenuItems.map((menuItem: any) => {
                return (
                    <li key={menuItem.label}>
                        {<MenuItem menuItem={menuItem} />}
                    </li>
                );
            })}
        </ul>
    );
}

export default MenuContainerLg;
