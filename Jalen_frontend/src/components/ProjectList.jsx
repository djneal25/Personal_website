import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectDetails from '../ProjectListDetails.json'
import resume from '../assets/Jalen_Neal_Resume_2025.pdf'

import { FaPython, FaReact, FaDocker, FaAws, FaDatabase } from 'react-icons/fa';


function ProjectList() {
   const icon_size = 30;

   const tech_icons1 = [
      { name: "Python", icon: <FaPython size={icon_size} /> },
      { name: "C++", icon: <i className="devicon-cplusplus-plain" style={{ fontSize: `${icon_size}px` }} ></i> },
   ];

   const tech_icons2 = [
      { name: "Python", icon: <FaPython size={icon_size} /> },
      { name: "Javascript", icon: <i className="devicon-javascript-plain" style={{ fontSize: `${icon_size}px` }}></i> },
      { name: "Django", icon: <i className="devicon-django-plain" style={{ fontSize: `${icon_size}px` }}></i> },
   ];

   const tech_icons3 = [
      { name: "Python", icon: <FaPython size={icon_size} /> },
      { name: "Tensorflow", icon: <i className="devicon-tensorflow-original" style={{ fontSize: `${icon_size}px` }}></i> },
   ];

   const tech_icons4 = [
      { name: "Python", icon: <FaPython size={icon_size} /> },
      { name: "Pytorch", icon: <i className="devicon-pytorch-original" style={{ fontSize: `${icon_size}px` }}></i> },
      { name: "Django", icon: <i className="devicon-django-plain" style={{ fontSize: `${icon_size}px` }}></i> },
      { name: "React", icon: <FaReact size={icon_size} /> },

   ];

   const tech_icons5 = [
      { name: "Python", icon: <FaPython size={icon_size} /> },
      { name: "OpenCV", icon: <i className="devicon-opencv-plain-wordmark" style={{ fontSize: `${icon_size}px` }}></i> },

   ];

   const tech_icons6 = [
      { name: "C++", icon: <i className="devicon-cplusplus-plain" style={{ fontSize: `${icon_size}px` }}></i> },
   ];

   const project_icons = [
      tech_icons1,
      tech_icons2,
      tech_icons3,
      tech_icons4,
      tech_icons5,
      tech_icons6
      
   ]

  return (
    <div class="block w-full h-full">
      <div class="w-9/10 h-min lg:h-65 m-auto">
      <div class="flex flex-col justify-start content-start">
            <div>
               <h1 class="text-4xl font-bold text-left">
               My Work, My Passion
               </h1>
            </div>
            <p className="text-2xl text-left my-6">
            From developing AI-powered applications to building
            scalable web platforms, my work reflects my passion
            for <span class="text-blue-500 font-bold">solving complex problems</span> through technology. 
            Here, you’ll find a collection of projects and experiences
            that showcase my expertise in machine learning, software
            engineering, and innovative system design.
            </p>
         </div>
      </div>
      <div class="w-full my-20 min-h-[800px]">
         <ul class="h-full w-9/10 m-auto flex flex-wrap justify-start gap-6">
            {ProjectDetails.map((details, index) =>(
            <li key={index} class="max-h-[500px] lg:w-[31%] flex  justify-center"><ProjectCard tech_icons={project_icons[index]} card_details={details} /></li>
            ))}
         </ul>
      </div>
      <div class="w-9/10 h-10 m-auto my-10 flex flex-col justify-center rounded-lg bg-white/5 text-white/50 hover:text-white hover:bg-white/10 duration-500">
         <div class=""><a class="w-full h-full flex flex-col justify-center" href={resume} download="Jalen_Neal_Resume.pdf">Download Resume</a></div>
      </div>
    </div>
  )
}

export default ProjectList
