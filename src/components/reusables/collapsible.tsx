import { PropsWithChildren, useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

interface CollapsibleProps {
    name: string
    defaultState?: boolean
}

export function Collapsible(props: PropsWithChildren<CollapsibleProps>) {
    const [isOpen, setIsOpen] = useState(props.defaultState || false)
    return (
        <>
            <div onClick={() => { setIsOpen(!isOpen) }} className="h-10 px-2 mx-2 mb-2 rounded-md flex justify-between items-center select-none hover:bg-gray-100">
                <div className="font-semibold">
                    {props.name}
                </div>
                <div>
                    {isOpen ? <FaChevronDown /> : <FaChevronRight />}
                </div>
            </div>
            {isOpen &&
                <div className="mx-2 -mt-2 mb-2 select-none p-2 rounded-md">
                    {props.children}
                </div>
            }
        </>
    )
}