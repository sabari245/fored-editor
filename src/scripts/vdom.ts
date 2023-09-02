import {useState} from "react"

class VDom {
    // states
    visualHtmlState: [string, React.Dispatch<React.SetStateAction<string>>]
    tag: keyof HTMLElementTagNameMap;
    content: string | VDom[] | undefined;
    constructor (tag: keyof HTMLElementTagNameMap, content: string | VDom[] | undefined){
        this.tag = tag;
        this.content = content;
        this.visualHtmlState = useState<string>(this.getVisualHTML());
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

    useVisualHTML(){
        return this.visualHtmlState[0];
    }
}

export {
    VDom
}