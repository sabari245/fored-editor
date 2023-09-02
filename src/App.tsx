import { VDom } from "./scripts/vdom.ts";

function App() {
  const root = new VDom("div", "Hello World");
  const visualHTML = root.useVisualHTML();

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: visualHTML,
        }}
      ></div>
    </>
  );
}

export default App;
