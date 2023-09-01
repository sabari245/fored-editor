class VDom {
    tag: keyof HTMLElementTagNameMap;
    content: string | VDom[] | undefined;
    constructor (tag: keyof HTMLElementTagNameMap, content: string | VDom[] | undefined){
        this.tag = tag;
        this.content = content;
    }

    buildElement(){
        let res = document.createElement(this.tag);
        
        // TODO: add the child/children
    }

    getVisualHTML() {
        // TODO: get the element from buildElement and create element that for the editor ( with the event listeners to select the thing )
    }
}