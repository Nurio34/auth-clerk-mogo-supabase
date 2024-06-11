import { menuItems } from "@/utils/menuItems";
import React from "react";
import MenuItem from "./Components/MenuItem";

function MenuContainerLg() {
    return (
        <ul className="flex gap-[1vw]">
            {menuItems.map((menuItem) => {
                return (
                    <>
                        {menuItem.show && (
                            <MenuItem
                                key={menuItem.label}
                                menuItem={menuItem}
                            />
                        )}
                    </>
                );
            })}
        </ul>
    );
}

export default MenuContainerLg;
