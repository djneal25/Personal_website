import React from 'react'


function TechCard({Icons, Title}) {
  return (
   <div class="duration-300 rounded-xl">
      <div class="flex flex-col justify-center h-[100px] lg:h-[150px] ">
         <h3 class="text-xl text-blue-500 text-center m-4 font-semibold ">
         {Title}
         </h3>
         <div className="flex flex-wrap justify-center gap-6 m-4 ">
            {Icons.map((tech, index) => (
            <div 
            key={index} 
            className={`flex flex-col items-center text-white/50 hover:text-white duration-500`}
            >
               {tech.icon}
            </div>
            ))}
         </div>
      </div>
   </div>
  )
}

export default TechCard
