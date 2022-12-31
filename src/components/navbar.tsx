import { Button, SecondaryButton } from "./buttons";

export default function Navbar() {
    return (
        <div className="py-2 bg-level-2 flex justify-between items-center">
            <div className="pl-2">
                <SecondaryButton>New Project</SecondaryButton>
            </div>
            <div className="flex pr-2">
                <SecondaryButton>Share</SecondaryButton>
                <Button>Show Code</Button>
            </div>
        </div>
    )
}