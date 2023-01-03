import { Button, SecondaryButton } from "./buttons";
import { BiLink, BiCodeAlt, BiCode } from "react-icons/bi";

export default function Navbar() {
    return (
        <div className="py-2 bg-level-2 flex justify-between items-center">
            <div className="pl-2">
                <SecondaryButton>New Project</SecondaryButton>
            </div>
            <div className="flex pr-2">
                <SecondaryButton>
                    <BiLink size={25} />
                    <span>Share</span>
                </SecondaryButton>
                <Button>
                    <BiCode size={25} />
                    <span>Show Code</span>
                </Button>
            </div>
        </div>
    )
}