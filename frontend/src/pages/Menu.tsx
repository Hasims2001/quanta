import { FileEdit } from 'lucide-react';
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Menu = () => {
    const navigate = useNavigate();
    const [stack, setStack] = useState("");
    const cards = [
        {
            code: "001",
            title: 'Frontend Developer',
            language : ['HTML', 'CSS', 'JavaScript'],
            content: 'DOM manipulation, event handling, box model.'
        },
        {
            code: "002",
            title: 'Backend Developer',
            language : ['Java', 'Spring Boot', 'Node'],
            content: 'database, REST API, authentication.'
        }
    ]

    const handleStacks = (text: string, input: string)=>{
        let textEle = document.getElementById(text);
        if(!textEle?.classList.value){
            textEle?.classList.add("hidden"); 
        }else{
            textEle?.classList.remove("hidden");
        }

        let inputEle = document.getElementById(input);

        if(inputEle?.classList.value.split(" ").includes("hidden")){
            inputEle?.classList.remove("hidden");
        }else{
            inputEle?.classList.add("hidden");
        }
    }

    const handleRoom = (roomId:string)=>{
        navigate("/menu/room");
    }
  return (
    <div className='min-h-screen bg-[#edf0f9] p-8'>
        <div className='flex gap-8 justify-center'>
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
                </div>
            ))}
        </div>

    </div>
  )
}
