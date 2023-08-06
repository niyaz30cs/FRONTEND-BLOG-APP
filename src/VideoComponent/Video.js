import React from 'react'
import baloon from "../VideoComponent/baloon.mp4"

function Video() {
  return (
    <div className='videoFile'>
      <video src={baloon} autoPlay loop muted className='video' />
    </div>
  )
}

export default Video
