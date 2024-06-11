import { Dispatch, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";

function MenuCloseBtn({
    setIsMenuOpen,
}: {
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
    const handleMenuCloseClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <button
            className="btn btn-sm btn-circle btn-error ml-auto"
            onClick={handleMenuCloseClick}
        >
            <IoMdClose size={24} color="white" />
        </button>
    );
}

export default MenuCloseBtn;
