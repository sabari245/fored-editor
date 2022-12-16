import { useState } from "react"

// create a enum with states
enum States {
    structure,
    components
}

function Tabs() {
    const [activeState, setActiveState] = useState<States>(States.structure)
    const handleSwitch = (to: States) => {
        if (to != activeState) {
            // TODO: code goes here
        }
        setActiveState(to);
    }
    return (
        <div className="flex justify-center">
            <div className="bg-gray-200 rounded-md px-1 flex h-10 items-center">
                <button onClick={() => { handleSwitch(States.structure) }} className={"flex justify-center items-center rounded-md h-8 w-28 mr-1" + (activeState == States.structure ? " bg-white" : " hover:bg-gray-100")}>structure</button>
                <button onClick={() => { handleSwitch(States.components) }} className={"flex justify-center items-center rounded-md h-8 w-28" + (activeState == States.components ? " bg-white" : " hover:bg-gray-100")}>components</button>
            </div>
        </div>
    )
}

export default function LeftBar() {
    return (
        <div className="bg-white w-80" style={{ height: "calc(100vh - 3rem)" }}>
            <div className="pt-3">
                <Tabs />
            </div>
        </div>
    )
}