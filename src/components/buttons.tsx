import React from 'react';

interface ButtonProps {
}
export function Button(props: React.PropsWithChildren<ButtonProps>) {
    return (
        <div className="flex justify-center items-center h-8 px-4 mx-2 bg-primary text-white font-normal rounded-lg">{props.children}</div>
    )
}

interface SecondaryButtonProps {
}
export function SecondaryButton(props: React.PropsWithChildren<SecondaryButtonProps>) {
    return (
        <div className="flex justify-center items-center h-8 px-4 mx-2 bg-level-4 text-white font-normal rounded-lg">{props.children}</div>
    )
}