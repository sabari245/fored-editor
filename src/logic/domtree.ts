interface DimensionType {
    width: string;
    height: string;
}
interface HierarchyType {
    name: string;
    children: HierarchyType[];
    node: DomNode;
}

class DomNode {
    id: null | string;
    name: string;
    attributes: { [key: string]: string };
    classes: string[];
    children: DomNode[];
    is_text: boolean;
    is_self_closing: boolean;

    constructor() {
        this.id = null;
        this.name = "div";
        this.attributes = {};
        this.classes = [];
        this.children = [];
        this.is_text = false;
        this.is_self_closing = false;
    }
    setName(name: string) {
        this.name = name;
    }
    setDimensions(dimensions: DimensionType) {
        this.attributes.width = dimensions.width;
        this.attributes.height = dimensions.height;
    }
    getHTML() {
        let html = '';
        if (this.is_text) {
            html += this.name;
        } else {
            if (this.is_self_closing) {
                html += `<${this.name}`;
                for (let key in this.attributes) {
                    html += ` ${key}="${this.attributes[key]}"`;
                }
                if (this.classes.length > 0) {
                    html += ` class="${this.classes.join(' ')}"`;
                }
                html += ' />';
                return html;
            } else {
                html += `<${this.name}`;
                for (let key in this.attributes) {
                    html += ` ${key}="${this.attributes[key]}"`;
                }
                if (this.classes.length > 0) {
                    html += ` class="${this.classes.join(' ')}"`;
                }
                html += '>';
                for (let child of this.children) {
                    html += child.getHTML();
                }
                html += `</${this.name}>`;
            }
        }
        return html;
    }

    // function returns the {name: "name", "children": [<name, children object>]} object
    getHierarchy() {
        let hierarchy: HierarchyType = {
            name: this.name,
            children: [],
            node: this
        };
        for (let child of this.children) {
            hierarchy.children.push(child.getHierarchy());
        }
        return hierarchy;
    }
}

class DomTree {
    root: DomNode;
    constructor() {
        this.root = new DomNode();
    }

    // this function is used to create a path to a node
    // eg: div>div[2]>p[1] will return second para inside the third div inside the root div
    getNode(path: string) {
        let node = this.root;
        let path_parts = path.split('>');
        for (let part of path_parts) {
            let name = part.split('[')[0];
            let index = parseInt(part.split('[')[1].split(']')[0]);
            let count = 0;
            for (let child of node.children) {
                if (child.name == name) {
                    if (count == index) {
                        node = child;
                        break;
                    } else {
                        count++;
                    }
                }
            }
        }
        return node;
    }
}

export { DomTree, DomNode };