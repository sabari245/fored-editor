import Leftbar from "./components/leftbar";
import Navbar from "./components/navbar";
import Rightbar from "./components/rightbar";
import Viewport from "./components/viewport";

export default function App() {
  return (
    <div className="flex flex-col w-screen h-screen bg-level-0">
      <Navbar />
      <div className="flex flex-grow">
        <Leftbar />
        <Viewport />
        <Rightbar />
      </div>
    </div>
  )
}