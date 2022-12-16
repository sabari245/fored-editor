import { HiOutlineHandRaised, HiOutlineShoppingBag } from 'react-icons/hi2';
import { TbLocation } from 'react-icons/tb';
import { PropsWithChildren } from "react"

interface IconButtonProps {

}

function IconButton(props: PropsWithChildren<IconButtonProps>) {
    return (
        <>
            <button className='flex items-center justify-center rounded-md text-2xl mx-2 h-10 w-10 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-700'>
                {props.children}
            </button>
        </>
    )
}

export default function TopBar() {
    return (
        <div className="h-12 bg-white flex items-center dark:bg-black dark:border-b dark:border-b-white">
            <div className='flex items-center pl-6'>
                <IconButton>
                    <TbLocation />
                </IconButton>
                <IconButton>
                    <HiOutlineHandRaised />
                </IconButton>
                <IconButton>
                    <HiOutlineShoppingBag />
                </IconButton>
            </div>
        </div>
    )
}