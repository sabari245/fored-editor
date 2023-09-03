import { TreeView } from "./components/tree-view.tsx";
import { ScrollArea } from "./components/ui/scroll-area.tsx";
import { VDom } from "./scripts/vdom.ts";

function App() {
  const root = new VDom("div", [
    new VDom("div", "hello"),
    new VDom("div", [new VDom("div", "world"), new VDom("div", "hello world")]),
  ]);

  const visualHTML = root.useVisualHTML();
  const elementTree = root.useElementTree();

  return (
    <>
      <main className="flex w-screen h-screen">
        <div>
          <ScrollArea className="h-screen w-80 bg-white p-2">
            <TreeView name={elementTree.name} children={elementTree.children} />
          </ScrollArea>
        </div>
        <div
          className="flex-grow bg-slate-200"
          dangerouslySetInnerHTML={{
            __html: visualHTML,
          }}
        ></div>
      </main>
    </>
  );
}

export default App;
