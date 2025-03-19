import React from 'react'

import { FaGithub, FaLinkedin } from "react-icons/fa";

function IconList() {
  return (
   <div className='flex w-full h-8 gap-2 my-6'>
      <a href="https://github.com/djneal25" target="_blank" rel="noopener noreferrer">
      <FaGithub class="block w-8 h-full text-white/50 hover:text-white duration-300"/>
      </a>
      <a href="https://www.linkedin.com/in/jalen-neal-09113a190/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin class="block w-8 h-full text-white/50 hover:text-white duration-300" />
      </a>
   </div>
  )
}

export default IconList
