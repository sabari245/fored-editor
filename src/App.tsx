import { useState, useEffect } from "react";
import { createElement } from "./scripts/dom.ts";

function App() {
  const [html, setHtml] = useState<string>("");
  let root: HTMLElement | null = null;

  useEffect(() => {
    root = createElement({
      tag: "div",
      content: "Hello world",
    });
  }, []);

  return (
    <>
      <div>Hello world</div>
    </>
  );
}

export default App;
