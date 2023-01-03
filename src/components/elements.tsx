import React from "react";

interface ElementProps {
}
export function Element(props: React.PropsWithChildren<ElementProps>) {
    return (
        <div className="flex flex-col gap-2 h-40 border border">
            {props.children}
        </div>
    )
}