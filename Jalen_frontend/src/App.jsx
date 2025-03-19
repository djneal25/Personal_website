import { useState } from 'react'

import Hero from './components/Hero'
import PhotoCardList from './components/PhotoCardList'
import ProjectList from './components/ProjectList'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/footer'

import './App.css'

function App() {
  return (
  <div class="scroll-smooth w-screen h-screen flex justify-center items-center flex-col overflow-auto">
    <div class=" z-[-1] fixed  w-full sm:w-4/5 max-w-[1440px] h-screen bg-[#1b1d22] outline outline-[#363b45] fixed flex justify-center items-center flex-col"></div>
    <div class="h-full w-full block">
      <div class="block w-full  h-12 mt-10 max-w-[1440px] m-auto">
        <Navbar />
      </div>    
      <section id="about">
        <div class="block w-4/5 max-w-[1440px] h-[min(10vw, 400px)] m-auto ">
          <Hero />
        </div>
        <div class="block w-full h-[400px] m-auto my-20">
          <PhotoCardList/>
        </div>
      </section>
      <section id="experience">
        <div class="block w-4/5 m-auto">
          <ProjectList/>
        </div>
      </section>
      <section id="technology">
        <div class="block w-4/5 max-h-[400px] m-auto my-10">
          <TechStack/>
        </div>
      </section>
      <section id="contact">
        <div class="block w-4/5 h-[400px] m-auto my-30">
          <Contact/>
        </div>
      </section>
      <hr className="border-white/10 w-4/5 m-auto" />
      <div class="flex flex-col justify-center w-4/5 h-[100px] m-auto">
        <Footer/>
      </div>
      <br></br>
    </div>

  </div>
  )
}

export default App
