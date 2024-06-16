"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

function ToggleThemeBtn() {
    const [theme, setTheme] = useState<"dark" | "light">("light");

    useEffect(() => {
        const html = document.querySelector("html");
        html?.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <AnimatePresence mode="wait">
            {theme === "light" ? (
                <motion.button
                    key="light"
                    type="button"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    onClick={() => setTheme("dark")}
                >
                    <IoIosSunny
                        size={24}
                        color="orange"
                        style={{
                            filter: "drop-shadow(0 0 5px orange) drop-shadow(0 0 10px orange) drop-shadow(0 0 110px orange)",
                        }}
                    />
                </motion.button>
            ) : (
                <motion.button
                    key="dark"
                    type="button"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    onClick={() => setTheme("light")}
                >
                    <IoIosMoon
                        size={24}
                        color="yellow"
                        style={{
                            filter: "drop-shadow(0 0 5px yellow) drop-shadow(0 0 10px yellow) drop-shadow(0 0 15px yellow)",
                        }}
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
}

export default ToggleThemeBtn;

// {/* <AnimatePresence>
//             {theme === "light" ? (
//                 <motion.button
//                     type="button"
//                     initial={{ y: 50 }}
//                     animate={{ y: 0 }}
//                     onClick={() => setTheme("dark")}
//                 >
//                     <IoIosMoon />
//                 </motion.button>
//             ) : (
//                 <motion.button type="button" onClick={() => setTheme("light")}>
//                     <IoIosSunny />
//                 </motion.button>
//             )}
//         </AnimatePresence> */}
