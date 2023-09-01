import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate();

  //handleTryFreeBTN
  const handleTryFree = ()=>{
    navigate("/category")
  }

  return (
    <div className="bg-[#0A2640] text-white h-screen">
      <div className="p-2 max-w-7xl m-auto h-screen flex justify-evenly gap-10 pt-40">
        <div className="text-left p-3">
          <h1 className="text-7xl font-bold mb-5 text-blue-300">Have your</h1>
          <h1 className="text-7xl font-bold text-green-500 mb-5">best interview session</h1>
          <p className=" mb-20">Ace Your Interviews with AI-Powered Practice Sessions.</p>
          <div className="flex gap-5">
            <button onClick={handleTryFree} className="p-3 rounded-xl bg-blue-400 text-white w-40 hover:bg-white hover:text-blue-400">Try it Free</button>
            <button onClick={handleTryFree} className="border border-2 border-blue-400 p-2 text-blue-400 text-sm w-40 rounded-xl hover:bg-blue-400 hover:text-white">Get a Demo</button>
          </div>
        </div>
        <img src="https://img.freepik.com/premium-photo/ai-generated-illustrution-robot-is-interviewing-man-modern-office_441362-10368.jpg?size=626&ext=jpg&ga=GA1.1.1257944628.1683352118&semt=ais" alt="welcome" style={{width:"700px", height:"500px"}} className="shadow-lg shadow-blue-500 rounded-xl" />
      </div>
    </div>
  )
}
