import React from 'react'


function TechCard({Icons, Title}) {
  return (
   <div class="duration-300 rounded-xl">
      <div class="flex flex-col justify-center items-center h-[200px] lg:h-[300px] ">
         <div class=" min-h-[50px] lg:h-[100px]">
            <h3 class="text-xl text-blue-500 text-center m-4 font-semibold ">
            {Title}
            </h3>
         </div>
         <div className="flex flex-wrap h-[80px] lg:h-[150px] justify-left gap-6 m-4 ">
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
