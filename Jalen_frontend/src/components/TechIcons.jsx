import React from 'react'
// import { FaPython, FaReact, FaDocker, FaAws, FaDatabase } from 'react-icons/fa';



function TechIcons({tech_icons}) {
   // const techIcons = [
   //    { name: "Python", icon: <FaPython size={icon_size} /> },
   //    { name: "React", icon: <FaReact size={icon_size} /> },
   //    { name: "Docker", icon: <FaDocker size={icon_size} /> },
   //    { name: "AWS", icon: <FaAws size={icon_size} /> },
   //    { name: "Databases", icon: <FaDatabase size={icon_size} /> }
   //  ];
  return (
   <div className="flex flex-wrap justify-left gap-6 m-4 ">
      {tech_icons.map((tech, index) => (
      <div key={index} className="flex flex-col items-center text-white/50 hover:text-white duration-500">
         {tech.icon}
      </div>
      ))}
   </div>
  )
}

export default TechIcons
