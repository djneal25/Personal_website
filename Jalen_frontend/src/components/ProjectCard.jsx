import React from 'react'
import TechIcons from './TechIcons'

function ProjectCard({card_details, tech_icons}) {
  return (
   <div class="hover:bg-white/10 duration-300 rounded-xl">
      <div class="flex flex-col justify-start  h-min h-full ">
         <h3 class="text-lg text-left m-4 font-semibold ">{card_details.title}</h3>
         <p class="text-base text-left mt-3 mx-4">{card_details.description}</p>
         <div>
            <TechIcons tech_icons={tech_icons}/>
         </div>
      </div>
   </div>
  )
}

export default ProjectCard
