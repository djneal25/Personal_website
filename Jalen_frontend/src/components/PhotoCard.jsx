import React from 'react'
import react_svg from "../assets/react.svg"

function PhotoCard( {index, photo} ) {

   // Determine rotation dynamically
   const rotationClass = index % 2 === 0 ? "rotate-2" : "-rotate-2";

  return (
   <div className={`block w-[300px] h-9/10 mt-2 shadow-xl rounded-xl overflow-hidden ${rotationClass}`}>
      <div class="absolute bg-blue-500/10 w-full h-full"></div>
      <div class="block h-full w-full ">
         <img class="w-full h-full object-cover " src={photo} alt="Profile Picture"/>
      </div>
   </div>
  )
}

export default PhotoCard
