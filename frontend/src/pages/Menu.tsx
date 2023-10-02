import { FileEdit, PenSquare } from "lucide-react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoomContext } from "../Context/RoomData";

export const Menu = () => {
  const navigate = useNavigate();
  const [stack, setStack] = useState("");
  const obj = useContext(RoomContext);
  console.log(obj);
  const [data, setData] = useState({ title: "", language: "", content: ""})
  const cards = [
    {
      code: "001",
      title: "Frontend Developer",
      language: ["HTML", "CSS", "JavaScript"],
      content: "DOM manipulation, event handling, box model.",
    },
    {
      code: "002",
      title: "Backend Developer",
      language: ["Java", "Spring Boot", "Node"],
      content: "database, REST API, authentication.",
    },
    {
      code: "003",
      title: "Custom Interview",
      language: [],
      content: "",
    },
  ];

  const handleStacks = (text: string, input: string) => {
    let textEle = document.getElementById(text);
    if (!textEle?.classList.value) {
      textEle?.classList.add("hidden");
    } else {
      textEle?.classList.remove("hidden");
    }

    let inputEle = document.getElementById(input);

    if (inputEle?.classList.value.split(" ").includes("hidden")) {
      inputEle?.classList.remove("hidden");
    } else {
      inputEle?.classList.add("hidden");
    }
  };
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }
  const handleCustom = (roomId: string)=>{
    if(!data.title || !data.language || !data.content){
      alert('all the inputs are required!');
    }else{


      navigate(`/menu/room/${roomId}`);
    }
  }
  const handleRoom = (roomId: string) => {
    navigate(`/menu/room/${roomId}`);
  };
  console.log("rendr")
  return (
    <div className="min-h-screen bg-[#edf0f9] p-8">
      <div className="flex gap-8 justify-center">
        {cards.map((card, index) => {
          if (index === cards.length - 1) {
            return (
              <div
                key={index}
                className="p-8 max-w-sm  bg-[#0D2740] rounded-xl text-center shadow-red-950"
              >
                <input type="text" name="title" value={data.title} onChange={handleChange} placeholder="Title..." className="text-xl rounded outline-none p-1"></input>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <p className="text-white text-xl mb-4">Tech Stack (sepreate With '|') </p>
                <input type="text"  value={data.language} name="language" onChange={handleChange} placeholder="i.e  React.js | JavaScript..." className=" rounded outline-none p-1 mb-4"></input>
                <p className="text-white text-xl mb-4">Topics  </p>
                <input type="text" value={data.content} onChange={handleChange} placeholder="i.e Custom hooks, Virtual DOM...." 
                name="content" className=" rounded outline-none p-1 mb-4"></input>
                <button
                  onClick={() => handleCustom(`${data.title?.split(" ")[0]}`)}
                  className=" bg-blue-400 p-2 bottom-0 text-white rounded-lg"
                >
                  Start the interview
                </button>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="p-8 max-w-sm text-white bg-[#0D2740] rounded-xl text-center shadow-red-950"
              >
                <p className="text-3xl">{card.title}</p>
                <br></br>
                <hr></hr>
                <br></br>
                <div className="flex my-4 items-center justify-center">
                  <p className="text-xl">
                    Tech Stack: &nbsp;
                    <span id={`${index}-text`}>
                      {card.language.join(" | ")}
                    </span>
                  </p>
                </div>
                <p className="text-lg my-4">Topics: {card.content}</p>
                <button
                  onClick={() => handleRoom(`${card.title?.split(" ")[0]}`)}
                  className=" bg-blue-400 p-2 bottom-0 rounded-lg"
                >
                  Start the interview
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

{
  /* <div className='flex gap-8 justify-center'>
{cards.map((card, index) => (
    <div key={index} className='p-8 max-w-sm text-white bg-[#0D2740] rounded-xl text-center shadow-red-950'> 
        <p className='text-3xl'>{card.title}</p>
        <br></br>
        <hr></hr>
        <br></br>
        <div className='flex my-4 items-center justify-center'>
        <p className='text-xl'>Tech Stack: &nbsp;
        <span id={`${index}-text`}>{stack || card.language.join(" | ")}</span>
        </p>
        <input type='text' id={`${index}-input`} className='hidden text-black p-1 rounded-md' value={stack || card.language.join(" | ")} onChange={(e)=>{setStack(e.target.value)}} />
        <FileEdit className='cursor-pointer' onClick={()=> {handleStacks(`${index}-text`, `${index}-input`)}} /> 
        </div>
        <p className='text-lg my-4'>Topics: {card.content}</p>
        <button onClick={()=> handleRoom(`${card.title?.split(" ")[0]}`)} className='bg-blue-400 p-2 rounded-lg'>Start the interview</button>
    </div>
))}
</div> */
}
