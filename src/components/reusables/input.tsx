import React, { useState, PropsWithChildren, InputHTMLAttributes, DOMAttributes } from 'react'

interface TextFieldWithIconProps {
    onButtonClick?: DOMAttributes<HTMLButtonElement>['onClick']
    value: InputHTMLAttributes<HTMLInputElement>['value']
    onChange: InputHTMLAttributes<HTMLInputElement>['onChange']
}


export function TextFieldWithIcon(props: PropsWithChildren<TextFieldWithIconProps>) {
    return (
        <div className="mx-auto justify-center flex items-center rounded-md w-28">
            <div>
                <button onClick={props.onButtonClick} className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-8 h-8 font-bold text-black">
                    {props.children}
                </button>
            </div>
            <div className="w-full">
                <input type="text" value={props.value} onChange={props.onChange} className="w-20 h-8 px-4 py-1 rounded-r-md border border-gray-100 text-black outline-none" />
            </div>
        </div>
    )
}

interface IconSwitchProps {
    defaultState?: boolean
    className?: string
    style?: React.CSSProperties
}

export function IconSwitch(props: PropsWithChildren<IconSwitchProps>) {
    const [switchState, setSwitchState] = useState(props.defaultState || false)
    return (
        <>
            <button onClick={() => setSwitchState(!switchState)} className={'flex items-center justify-center rounded-md text-lg m-2 h-8 w-8 ' + (switchState ? 'bg-blue-500 text-white' : 'bg-gray-200') + (" " + props.className || "")} style={props.style}>
                {props.children}
            </button>
        </>
    )
}