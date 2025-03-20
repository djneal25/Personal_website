import React from 'react'

function Footer() {
  return (
   <div>
   {/* Screen Size > 600px */}
      <div class="hidden sm:block sm:h-full w-9/10 m-auto">
         <div class="h-full flex justify-center items-center">
            <ul 
            class="flex flex-row gap-8 w-4/5
            justify-around items-center rounded-full font-semibold"
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
      </div>

      {/* Screen Size < 600px */}
      <div class="h-full sm:hidden w-9/10 m-auto">
         <div class="h-full flex justify-center items-center">
            <ul 
            class="flex flex-row gap-8 w-4/5
            justify-around items-center rounded-full font-semibold"
            >
               <li>
               <a href="#top" className="hover:text-blue-500 duration-200">Back to Top</a>
               </li>
            </ul>
         </div>
      </div>
   </div>
  )
}

export default Footer
