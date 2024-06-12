import MenuContainerSm from "./MenuContainerSm";
import MenuContainerLg from "./MenuContainerLg";
import { User } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

function Header({ user }: { user: User | null }) {
    const menuItems = [
        {
            to: "/",
            label: "home",
            show: true,
        },
        {
            to: "/login",
            label: "login",
            show: !user,
        },
        {
            to: "/register",
            label: "register",
            show: !user,
        },
        {
            to: "/jobs",
            label: "jobs",
            show: user,
        },
        {
            to: "/activity",
            label: "activity",
            show: user,
        },
        {
            to: "/membership",
            label: "membership",
            show: user,
        },
        {
            to: "/account",
            label: "account",
            show: user,
        },
    ];

    return (
        <header className="py-[2vh] px-[4vw] shadow-sm shadow-primary flex justify-between gap-[2vw]">
            <div className=" lg:hidden">
                <MenuContainerSm menuItems={menuItems} />
            </div>
            <div className="hidden lg:flex justify-between grow">
                <div
                    className=" capitalize font-bold text-2xl"
                    style={{ fontVariant: "small-caps" }}
                >
                    job portal
                </div>
                <MenuContainerLg menuItems={menuItems} />
            </div>
            <UserButton afterSignOutUrl="/" />
        </header>
    );
}

export default Header;
