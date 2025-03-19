import React from 'react'
import PhotoCard from './PhotoCard'

import Presentation from "../assets/ConferencePresentation.jpeg"
import SystemDesign_img from "../assets/SystemDesignDiagram.png"
import Photo3 from "../assets/ML_code.png"
import Photo4 from "../assets/CV_project.png"
import Photo5 from "../assets/Desktop_setup.jpeg"

function PhotoCardList() {
   const photo_urls = [
      SystemDesign_img,
      Photo3,
      Photo4,
      Photo5,
      Presentation,
   ]  

  return (
   <div class="relative w-full h-[400px] overflow-hidden flex justify-center items-center">
      <div class="h-full flex flex-nowrap gap-x-6">
        {photo_urls.map((photo, index) => (
          <PhotoCard key={index} index={index} photo={photo}/>
        ))}
      </div>
   </div>
  )
}

export default PhotoCardList
