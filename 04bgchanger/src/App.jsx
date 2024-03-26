import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
          <button onClick={() => setColor("red")}
          className="px-2 py-1 rounded-md" style={{backgroundColor: "red"}}>
            red
          </button>
          <button onClick={() => setColor("green")}
          className="px-2 py-1 rounded-md" style={{backgroundColor: "green"}}>
            green
          </button>
          <button onClick={() => setColor("blue")}
          className="px-2 py-1 rounded-md" style={{backgroundColor: "blue"}}>
            blue
          </button>
          <button onClick={() => setColor("orange")}
          className="px-2 py-1 rounded-md" style={{backgroundColor: "orange"}}>
            orange
          </button>
          <button onClick={() => setColor("black")}
          className="px-2 py-1 rounded-md text-white" style={{backgroundColor: "black"}}>
            black
          </button>
        </div>
      </div>
    </>
  )
}

export default App
