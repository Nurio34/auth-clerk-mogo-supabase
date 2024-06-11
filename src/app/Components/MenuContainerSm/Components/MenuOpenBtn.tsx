import { Dispatch, SetStateAction } from "react";
import { IoIosMenu } from "react-icons/io";

function MenuOpenBtn({
    setIsMenuOpen,
}: {
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
    const handleMenuOpenClick = () => {
        setIsMenuOpen(true);
    };

    return (
        <button
            className="btn btn-primary btn-sm"
            onClick={handleMenuOpenClick}
        >
            <IoIosMenu color="white" size={24} />
        </button>
    );
}

export default MenuOpenBtn;
