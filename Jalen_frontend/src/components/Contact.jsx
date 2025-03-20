import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import headshotPic from '../assets/headshot_transparent.png'

function Contact() {
  return (
    <div class="flex flex-col h-4/5 justify-center">
            <h1 class="text-4xl font-bold text-center mb-6">
            Let's Connect!
            </h1>
      <div class="flex flex-row gap-8 w-9/10 m-auto rounded-xl">
         <div class=" max-lg:hidden relative flex flex-col justify-start lg:h-100 lg:w-100">
            <div className="relative h-4/5 w-4/5 rounded-full m-auto overflow-hidden">
               <img className="h-full w-full object-contain" src={headshotPic} alt="Profile Picture"/>
               <div className="absolute inset-0 bg-blue-500/10"></div>
            </div>
         </div>
         <div class="flex flex-col justify-center h-full grow-2 text-xl my-4">
            <div class="w-full sm:w-4/5 h-4/5 m-auto flex text-sm flex-col justify-center gap-8 items-center">
               <div class="w-4/5">
                  <a
                     href="https://www.linkedin.com/in/jalen-neal-09113a190/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center h-10 space-x-6 text-white/50 hover:text-white duration-300"
                     >
                     <FaLinkedin class="block w-8 h-full" />
                     <span className="font-medium">Follow me on LinkedIn</span>
                  </a>
               </div>
               <div class="w-4/5">
                  <a
                     href="https://github.com/djneal25"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center h-10 space-x-6 text-white/50 hover:text-white duration-300"
                     >
                     <FaGithub class="block w-8 h-full" />
                     <span className="font-medium">Follow me on Github</span>
                  </a>
               </div>
               <hr className="border-blue-500 w-full lg:w-4/5 my-2" />
               <div class="w-4/5">
                  <a
                     href="mailto:djneal25@gmail.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center h-10 space-x-6 text-white/50 hover:text-white duration-300"
                     >
                     <FaEnvelope class="block w-8 h-full" />
                     <span className=" lg:font-medium">djneal25@gmail.com</span>
                  </a>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Contact
