import { useState } from "react";
import { ButtonGroup } from "./buttons";
import { Section } from "./section";
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';

interface MenuProps {
    name: string
}
function Menu(props: React.PropsWithChildren<MenuProps>) {
    const [isOpen, setIsOpen] = useState(false);
    function handleClick(e: any) {
        e.stopPropagation();
        setIsOpen(p => !p);
    }
    return (
        <div onClick={handleClick} className="bg-primary bg-opacity-20 w-full py-1 rounded-lg pl-2 pr-1 text-white font-semibold my-px">
            <span className="pb-2">{isOpen ? <BiChevronDown /> : <BiChevronRight />}{props.name}</span>
            {
                isOpen &&
                <div className="">
                    {props.children}
                </div>
            }
        </div>
    )
}

export default function Leftbar() {
    return (
        <div className="w-64 bg-level-1">
            <div className="p-4">
                <ButtonGroup titles={['layout', 'elements']} active={0}></ButtonGroup>
            </div>
            <Section title="layout">
                <div className="flex flex-wrap">
                    <Menu name="div">
                        <Menu name="div">
                            <Menu name="div"></Menu>
                        </Menu>
                    </Menu>
                    <Menu name="div">
                        <Menu name="div"></Menu>
                    </Menu>
                    <Menu name="div"></Menu>
                    <Menu name="div"></Menu>
                </div>
            </Section>
        </div>
    )
}