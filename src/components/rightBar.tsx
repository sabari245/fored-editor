import { useState } from "react"
import {
    MdAlignHorizontalCenter,
    MdAlignHorizontalLeft,
    MdAlignHorizontalRight,
    MdAlignVerticalBottom,
    MdAlignVerticalCenter,
    MdAlignVerticalTop,
} from 'react-icons/md'

import { FaLink } from 'react-icons/fa'

import {
    RxCornerBottomLeft,
    RxCornerBottomRight,
    RxCorners,
    RxCornerTopLeft,
    RxCornerTopRight
} from 'react-icons/rx'
import { Collapsible } from "./reusables/collapsible"
import { IconSwitch, TextFieldWithIcon } from "./reusables/input"



export default function RightBar() {
    return (
        <div className="bg-white w-80 absolute right-0 top-12" style={{ height: "calc(100vh - 3rem)" }}>
            <div className="pt-2">
                <Collapsible name="align" defaultState={true}>
                    <Alignment />
                </Collapsible>
                <Collapsible name="Dimensions" defaultState={true}>
                    <Dimensions />
                </Collapsible>
                <Collapsible name="Color">
                    <div className="rounded-full overflow-clip h-8 w-8">
                        <input onChange={(e) => { console.log(e.target.value) }} type="color" className="-translate-x-2 -translate-y-2 w-12 h-12 outline-none border-none" />
                    </div>
                </Collapsible>
                <Collapsible name="Shadow">
                    Hello world
                </Collapsible>
                <Collapsible name="Code">
                    {"<div>I'll do it </div>"}
                </Collapsible>
            </div>
        </div>
    )
}

function Alignment() {
    return (
        <>
            <div className="flex flex-wrap">
                <IconSwitch>
                    <MdAlignHorizontalLeft />
                </IconSwitch>
                <IconSwitch>
                    <MdAlignHorizontalCenter />
                </IconSwitch>
                <IconSwitch>
                    <MdAlignHorizontalRight />
                </IconSwitch>
                <IconSwitch>
                    <MdAlignVerticalTop />
                </IconSwitch>
                <IconSwitch>
                    <MdAlignVerticalCenter />
                </IconSwitch>
                <IconSwitch>
                    <MdAlignVerticalBottom />
                </IconSwitch>
            </div>
        </>
    )
}


function Dimensions() {
    interface DimensionTypes {
        type: "width" | "height" | "padding" | "margin"
    }

    return (
        <div>

        </div>
    )
}

