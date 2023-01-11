import { Button, SecondaryIconButton, IconButton } from "./buttons";
import { BsPlusLg, BsCursorText } from "react-icons/bs"
import { FiSquare } from "react-icons/fi"
import { TiLocationArrowOutline } from "react-icons/ti";
import { HiOutlineHandRaised } from "react-icons/hi2";
import { TiZoomOutline } from "react-icons/ti";
import { FaRegShareSquare } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { Divider } from "./utils";
import { useEffect, useRef } from "react";

export default function Navbar() {
    const navBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const navBar = navBarRef.current;
        if (navBar) {
            const { width } = navBar.getBoundingClientRect();
            navBar.style.left = `calc(50% - ${width / 2}px)`
        }
    }, [navBarRef])

    return (
        <div ref={navBarRef} className="py-2 bg-level-2 flex justify-between items-center absolute rounded-lg bottom-4">
            <SecondaryIconButton>
                <BsPlusLg />
            </SecondaryIconButton>
            <Divider />
            <SecondaryIconButton>
                <FiSquare />
            </SecondaryIconButton>
            <SecondaryIconButton>
                <BsCursorText size={22} />
            </SecondaryIconButton>
            <Divider />
            <IconButton>
                <TiLocationArrowOutline size={22} className="-rotate-90" />
            </IconButton>
            <SecondaryIconButton>
                <HiOutlineHandRaised size={22} />
            </SecondaryIconButton>
            <SecondaryIconButton>
                <TiZoomOutline size={22} />
            </SecondaryIconButton>
            <Divider />
            <SecondaryIconButton>
                <FaRegShareSquare size={18} />
            </SecondaryIconButton>
            <SecondaryIconButton>
                <BiCodeAlt size={22} />
            </SecondaryIconButton>
            <SecondaryIconButton>
                <HiMenu size={22} />
            </SecondaryIconButton>
        </div>
    )
}