import { IElementTree } from "@/utils/utils.ts";
import {useState} from "react"

class VDom {
    // states
    visualHtmlState: [string, React.Dispatch<React.SetStateAction<string>>];
    elementTreeState: [IElementTree, React.Dispatch<React.SetStateAction<IElementTree>>];
    tag: keyof HTMLElementTagNameMap;
    content: string | VDom[] | undefined;
    constructor (tag: keyof HTMLElementTagNameMap, content: string | VDom[] | undefined){
        this.tag = tag;
        this.content = content;
        this.visualHtmlState = useState<string>(this.getVisualHTML());
        this.elementTreeState = useState<IElementTree>(this.getElementTree());
    }

    refreshStates() {
        this.visualHtmlState[1](this.getVisualHTML());
        this.elementTreeState[1](this.getElementTree());
    }

    buildElement(): HTMLElement {
        let res = document.createElement(this.tag);
        
        switch(typeof this.content){
            case "string":
                res.innerText = this.content;
                break;
            case "object":
                if (Array.isArray(this.content)) {
                    for (const child of this.content) {
                        res.appendChild(child.buildElement());
                    }
                }
                break;
            default:
                // do nothing
                break;
        }

        return res
    }

    getVisualHTML() {
        // TODO: get the element from buildElement and create element that for the editor ( with the event listeners to select the thing )
        return this.buildElement().innerHTML;
    }

    getElementTree(): IElementTree {
        let res: IElementTree = {
            name: this.tag,
            children: (typeof this.content === "string" || typeof this.content === "undefined") ? [] : this.content.map(e=>e.getElementTree())
        }
        return res;
    }

    useVisualHTML(){
        return this.visualHtmlState[0];
    }
    useElementTree(){
        return this.elementTreeState[0];
    }
}

export {
    VDom
}