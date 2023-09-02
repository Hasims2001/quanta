import React from 'react'
import { FaJsSquare, FaNodeJs, FaCss3Alt, FaReact } from "react-icons/fa";
import { useNavigate } from 'react-router';

export const Category = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#F3F4F6] text-black">
      <div className="p-10">
        <div className="flex gap-20 justify-between max-[768px]:flex-col items-center">
          <div className="flex flex-col gap-10 ">
            <div className="bg-white border border-2 border-blue-400 w-[500px] p-5 rounded-xl transform hover:scale-105 transition-transform duration-300 hover:shadow-xl max-[425px]:w-[400px]">
                <h1 className="text-center text-xl font-bold mb-4 text-blue-900">Coding Round</h1>
                <p className="mb-5 text-justify">Prepare for technical interviews with real-world coding challenges. Our AI-powered platform generates coding questions from top tech companies and evaluates your solutions, providing detailed feedback to help you succeed in your coding interviews.</p>
                <div className="flex gap-5 text-green-600 text-xl justify-center mb-3">
                  <FaJsSquare />
                  <FaNodeJs />
                  <FaCss3Alt />
                  <FaReact />
                </div>
                <hr />
                <button onClick={()=> {navigate("/room/coding")}}  className="p-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 hover:text-white mt-3">Start the Interview</button>
            </div>

            <div className="bg-white border border-2 border-blue-400 w-[500px] p-5 rounded-xl transform hover:scale-105 transition-transform duration-300 hover:shadow-xl max-[425px]:w-[400px]">
                <h1 className="text-center text-xl font-bold mb-4 text-blue-900">DSA Round</h1>
                <p className="mb-5 text-justify">Master data structures and algorithms with our DSA interview scenarios. Practice solving complex problems and algorithms commonly asked in technical interviews. Our AI ensures that you receive personalized feedback to enhance your problem-solving skills.</p>
                <div className="flex gap-5 text-green-600 text-sm justify-center mb-3">
                  <p>Array | Matrix | Stack | Queue...</p>
                </div>
                <hr />
                <button onClick={()=> {navigate("/room/dsa")}} className="p-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 hover:text-white mt-3">Start the Interview</button>
            </div>

            <div className="bg-white border border-2 border-blue-400 w-[500px] p-5 rounded-xl transform hover:scale-105 transition-transform duration-300 hover:shadow-xl max-[425px]:w-[400px]">
                <h1 className="text-center text-xl font-bold mb-4 text-blue-900">Behavioral Round</h1>
                <p className="mb-5 text-justify">Excel in HR and behavioral interviews with our realistic scenarios. Prepare for questions related to teamwork, leadership, and situational judgment. Receive constructive feedback on your responses to confidently handle the behavioral aspect of job interviews.</p>
                <div className="flex gap-5 text-green-600 text-sm justify-center mb-3">
                  <p>Latest HR Questions</p>
                </div>
                <hr />
                <button onClick={()=> {navigate("/room/general")}}  className="p-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 hover:text-white mt-3">Start the Interview</button>
            </div>
          </div>
          {/* <img src="https://img.freepik.com/free-photo/side-view-woman-working-indoors_23-2149915936.jpg?size=626&ext=jpg&ga=GA1.1.1257944628.1683352118&semt=ais"  alt="" /> */}
        </div>
      </div>
    </div>
  )
}
