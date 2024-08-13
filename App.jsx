import { useState } from 'react'

function App() {
const [color,setColor]=useState("white")
  return (
    <div className="w-full h-screen duration-200 "
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12  inset-x-0 px-7">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-zinc-400 px-4 py-2 rounded-3xl ">
          <button onClick={()=>setColor("Red")} className='outline-none px-4 py-1 rounded-full text-white Shadow-lg'
          style={{backgroundColor:"Red"}}
          >Red</button>
           <button onClick={()=>setColor("Blue")} className='outline-none px-4 py-1 rounded-full text-white Shadow-lg'
          style={{backgroundColor:"Blue"}}
          >Blue</button>
           <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white Shadow-lg'
          style={{backgroundColor:"green"}}
          >Green</button>
           <button onClick={()=>setColor("Black")}className='outline-none px-4 py-1 rounded-full text-white Shadow-lg'
          style={{backgroundColor:"Black"}}
          >Black</button>
        </div>
      </div>
       
    </div>
   
  )
}

export default App
