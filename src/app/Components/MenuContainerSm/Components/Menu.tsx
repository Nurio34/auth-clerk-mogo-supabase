import { motion, AnimatePresence } from "framer-motion";
import MenuCloseBtn from "./MenuCloseBtn";
import { Dispatch, SetStateAction } from "react";
import MenuItem from "./MenuItem";

function Menu({
    isMenuOpen,
    setIsMenuOpen,
    menuItems,
}: {
    isMenuOpen: boolean;
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
    menuItems: any;
}) {
    const validMenuItems = menuItems.filter(
        (menuItem: any) => menuItem.show === true,
    );

    return (
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    className=" absolute top-0 left-0 w-full min-h-screen bg-gradient-to-r from-[rgb(255,255,255,0.7)] to-[rgb(0,0,0,0.7)]"
                    initial={{ x: "-100%" }}
                    animate={{ x: 0, zIndex: 1000 }}
                    exit={{ x: "-100%" }}
                    onClick={() => setIsMenuOpen(false)}
                    // transition={{
                    //     duration: "1s",
                    // }}
                >
                    <div
                        className=" w-96 min-h-screen shadow-sm shadow-primary bg-white py-[2vh] px-[4vw]
                        flex flex-col gap-[1vh]
                    "
                        onClick={(e) => e.stopPropagation()}
                    >
                        <MenuCloseBtn setIsMenuOpen={setIsMenuOpen} />
                        <div
                            className=" font-bold text-2xl capitalize text-center"
                            style={{ fontVariant: "small-caps" }}
                        >
                            job portal
                        </div>
                        <ul className="flex flex-col gap-[1vh] ">
                            {validMenuItems.map((menuItem: any) => {
                                return (
                                    <li key={menuItem.label}>
                                        {menuItem.show && (
                                            <MenuItem
                                                menuItem={menuItem}
                                                setIsMenuOpen={setIsMenuOpen}
                                            />
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Menu;
