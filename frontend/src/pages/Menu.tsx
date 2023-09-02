import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Menu = () => {
    const navigate = useNavigate();
    const cards = [
        {
            code: "001",
            title: 'Frontend Developer',
            language : ['HTML', 'CSS', 'JavaScript'],
            content: 'DOM manipulation, event handling, styling on box, center div.'
        },
        {
            code: "002",
            title: 'Backend Developer',
            language : ['Java', 'Spring Boot', 'Node'],
            content: 'database, REST API, authentication.'
        }
    ]

    const handleRoom = (roomId:string)=>{
        navigate("/room");
    }
  return (
    <div className='min-h-screen bg-[#edf0f9] p-8'>
        <div className='flex gap-8 justify-center'>
            {cards.map((card, index) => (
                <div key={index} onClick={() => {handleRoom(card.code)}} className='p-8 max-w-sm text-white bg-[#0D2740] cursor-pointer rounded-xl text-center shadow-red-950'> 
                    <p className='text-3xl'>{card.title}</p>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <p className='text-xl my-4'>Tech Stack: {card.language.join(" | ")}</p>
                    <p className='text-lg my-4'>Topics: {card.content}</p>
                </div>
            ))}
        </div>

    </div>
  )
}
