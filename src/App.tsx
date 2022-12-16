import { useEffect } from 'react'
import TopBar from './components/topBar'
import LeftBar from './components/leftBar'
import RightBar from './components/rightBar'
import { DomNode } from './logic/domtree'

function App() {

  useEffect(() => {
    let test = new DomNode()
    test.name = "div"
    test.setDimensions({ width: "100px", height: "100px" })
    console.log(test.getHTML())
  }, [])

  return (
    <div className="bg-gray-200 h-screen">
      <TopBar />
      <div className="flex">
        <LeftBar />
        <div className='flex-grow'>
          <div></div>
        </div>
        <RightBar />
      </div>
    </div>
  )
}

export default App
