import React from 'react'
import { useState } from 'react';
import { FaBars } from "react-icons/fa";


function Navbar() {
   const [open, setOpen] = useState(false)

   function handleClick() {
      setOpen(!open);
      console.log(open)
   }


  return (
    <div class="h-full w-4/5 m-auto">
    {/* View for Screens of size > 1024px */}
      <div class="hidden lg:flex h-full w-full justify-center items-center">
         <ul 
         class="h-4/5 w-2/5 min-w-[500px] bg-white/10 flex flex-row gap-8 
         justify-center items-center rounded-full font-semibold "
         >
            <li>
            <a href="#about" className="hover:text-blue-500 duration-200">About</a>
            </li>
            <li>
            <a href="#experience" className="hover:text-blue-500 duration-200">Experience</a>
            </li>
            <li>
            <a href="#technology" className="hover:text-blue-500 duration-200">Technology</a>
            </li>
            <li>
            <a href="#contact" className="hover:text-blue-500 duration-200">Contact</a>
            </li>
         </ul>
      </div>
   {/* View for Screens of size < 1024px */}
      <div class=" lg:hidden w-9/10 h-full flex justify-end m-auto ">
         {!open ?
            <div class="bg-white/5 h-full w-12 rounded-xl flex justify-center items-center hover:text-blue-500 hover:bg-white/10 duration-200" onClick={handleClick}>
               <FaBars class="w-4/5 h-4/5"/>
            </div>
            :
            <div class="z-1 bg-[#1b1d22] outline outline-[#363b45] h-80 w-50 rounded-xl flex flex-col justify-center items-center overflow-hidden" onMouseLeave={handleClick}>
               <ul 
               class="flex flex-col h-full w-full 
               justify-center items-center font-semibold py-4"
               >
                  <li class="w-full h-20 flex hover:bg-white/10 hover:text-blue-500 duration-200">
                  <a href="#about" className="w-full h-full flex flex-col justify-center">About</a>
                  </li>
                  <li class="w-full h-20 flex hover:bg-white/10 hover:text-blue-500 duration-200">
                  <a href="#experience" className="w-full h-full flex flex-col justify-center">Experience</a>
                  </li>
                  <li class="w-full h-20 flex hover:bg-white/10 hover:text-blue-500 duration-200">
                  <a href="#technology" className="w-full h-full flex flex-col justify-center">Technology</a>
                  </li>
                  <li class="w-full h-20 flex hover:bg-white/10 hover:text-blue-500 duration-200">
                  <a href="#contact" className="w-full h-full flex flex-col justify-center">Contact</a>
                  </li>
               </ul>
            </div>
         }

      </div>
    </div>
  )
}

export default Navbar
