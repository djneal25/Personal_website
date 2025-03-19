import React from 'react'
import IconList from './IconList'
import headshotPic from '../assets/headshot_transparent.png'


function Hero() {
  return (
    <div class="w-9/10 h-auto mb-10 m-auto">
      <div class="w-[100px] h-[100px] rounded-full overflow-hidden">
         <img class="object-cover" src={headshotPic} alt="Profile Picture"/>
      </div>

      <div class="flex flex-col justify-start content-start">
         <div class="w-full">
         <h1 class="text-4xl font-bold text-left my-6">
         Engineering AI & Software | Problem Solver
         </h1>
         </div>
         <p className="text-lg text-left">
         Hi, I’m <span class="text-blue-500 font-bold">Jalen Neal</span>
         , a Software Engineer pursuing an Master's
         in Computer Engineering with a focus on Machine Learning
         at Virginia Tech. With a background in AI, computer vision,
         and web development, I specialize in building intelligent
         systems that transform data into actionable insights.
         Welcome to my portfolio—where innovation meets execution. 🚀
         </p>
         <IconList />
      </div>
    </div>
  )
}

export default Hero
