import React, { useEffect, useState } from 'react';
import { getTextWidth } from '../logic/textwidth';

interface ButtonProps {
}
export function Button(props: React.PropsWithChildren<ButtonProps>) {
    return (
        <div className="flex justify-center items-center h-8 px-4 mx-2 bg-primary text-white font-normal rounded-lg gap-1">{props.children}</div>
    )
}

interface SecondaryButtonProps {
}
export function SecondaryButton(props: React.PropsWithChildren<SecondaryButtonProps>) {
    return (
        <div className="flex justify-center items-center h-8 px-4 mx-2 bg-level-4 text-white font-normal rounded-lg gap-1">{props.children}</div>
    )
}

interface ButtonGroupProps {
    titles: string[],
    active: number,
}
export function ButtonGroup(props: React.PropsWithChildren<ButtonGroupProps>) {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        let maxWidth = 0;
        for (let i = 0; i < props.titles.length; i++) {
            const width = getTextWidth(props.titles[i], 'normal 12pt lato');
            if (width > maxWidth) {
                maxWidth = width;
            }
        }
        setWidth(maxWidth + 32);
    })
    return (
        <div className="flex w-full justify-center">
            {props.titles.map((title, index) => {
                if (index === props.active) {
                    if (index === 0) {
                        return (
                            <div key={index} className="flex justify-center items-center h-8 bg-primary text-white font-normal rounded-l-lg" style={{ 'width': `${width}px` }}>{title}</div>
                        )
                    } else if (index === props.titles.length - 1) {
                        return (
                            <div key={index} className="flex justify-center items-center h-8 bg-primary text-white font-normal rounded-r-lg" style={{ 'width': `${width}px` }}>{title}</div>
                        )
                    } else {
                        return (
                            <div key={index} className="flex justify-center items-center h-8 bg-primary text-white font-normal" style={{ 'width': `${width}px` }}>{title}</div>
                        )
                    }
                } else {
                    if (index === 0) {
                        return (
                            <div key={index} className="flex justify-center items-center h-8 bg-level-4 text-white font-normal rounded-l-lg" style={{ 'width': `${width}px` }}>{title}</div>
                        )
                    } else if (index === props.titles.length - 1) {
                        return (
                            <div key={index} className="flex justify-center items-center h-8 bg-level-4 text-white font-normal rounded-r-lg" style={{ 'width': `${width}px` }}>{title}</div>
                        )
                    } else {
                        return (
                            <div key={index} className="flex justify-center items-center h-8 bg-level-4 text-white font-normal" style={{ 'width': `${width}px` }}>{title}</div>
                        )
                    }
                }
            })}
        </div>
    )
}