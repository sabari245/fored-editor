import { ButtonGroup } from "./buttons";
import { Section } from "./section";

export default function Leftbar() {
    return (
        <div className="w-64 bg-level-1">
            <div className="p-4">
                <ButtonGroup titles={['layout', 'elements']} active={0}></ButtonGroup>
            </div>
            <Section title="layout">
                <div className="flex flex-wrap">

                </div>
            </Section>
        </div>
    )
}