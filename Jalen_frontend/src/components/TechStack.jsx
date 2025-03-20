import React from 'react'
import TechCard from './TechCard'
import { FaPython, FaGithub, FaReact, FaDocker, FaAws, FaDatabase } from 'react-icons/fa';


function TechStack() {
   const icon_size = 40;
   const programming_icons = [
      { name: "Python", icon: <FaPython size={icon_size}/> },
      { name: "C++", icon: <i className="devicon-cplusplus-plain" style={{ fontSize: `${icon_size}px` }}></i> },
      { name: "Javascript", icon: <i className="devicon-javascript-plain" style={{ fontSize: `${icon_size}px` }}></i> },
   ];
   const framework_icons = [
      { name: "Django", icon: <i className="devicon-django-plain" style={{ fontSize: `${icon_size}px` }}></i> },
      { name: "React", icon: <FaReact size={icon_size} /> },
      { name: "Pytorch", icon: <i className="devicon-pytorch-original" style={{ fontSize: `${icon_size}px` }}></i> },
      { name: "Databases", icon: <FaDatabase size={icon_size} /> }
   ];
   const Cloud_icons = [
      { name: "Docker", icon: <FaDocker size={icon_size} /> },
      { name: "AWS", icon: <FaAws size={icon_size} /> },
      { name: "Github", icon: <FaGithub size={icon_size} /> },
   ];

  return (
   <div class="block w-full h-full">
      <div class="flex flex-col my-10">
         <div class="m-auto">
            <h1 class="text-4xl font-bold text-left">
            Behind the Code
            </h1>
         </div>
      </div>
      <div class="w-full h-full">
         <ul class="h-full w-9/10 m-auto flex flex-wrap justify-start gap-6">
            <li class="w-full lg:w-[31%]">
               <TechCard Icons={programming_icons} Title={'Programming Languages'}/>
            </li>
            <li class="w-full lg:w-[31%]">
               <TechCard Icons={framework_icons} Title={'Frameworks'}/>
            </li>
            <li class="w-full lg:w-[31%]">
               <TechCard Icons={Cloud_icons} Title={'Dev-ops'}/>
            </li>
         </ul>
      </div>
    </div>
  )
}

export default TechStack
