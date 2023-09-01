type DomType = Element | null

export function getChildren(root: DomType): DomType[] {
    if (root == null) return []

    let res: (DomType)[] = []

    for (let i = 0; i < root.children.length; i++) {
        res.push(root.children.item(i))
    }

    return res;
}

export function addChild(parent: DomType, child: DomType): undefined {
    if (parent == null || child == null) return;

    parent?.appendChild(child)
}

export function getParent(child: DomType): DomType {
    if (child == null) return null

    return child.parentElement
}

export function removeChildrenByIndex(parent: DomType, child: number): undefined {
    if ( parent == null ) return;

    // TODO: remove the child'th child of the parent
}

export function removeChildren(parent: DomType, child: DomType): undefined {
    if (parent == null || child == null) return;

    parent.removeChild(child);
}

interface createElementProps {
    tag: string,
    content?: string,
}
export function createElement(props: createElementProps) {
    const elem = document.createElement(props.tag)

    if (props.content) elem.innerHTML = props.content;

    return elem;
}
