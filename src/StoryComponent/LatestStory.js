import React from 'react'
import StoryBolly from './StoryBolly'
import StoryHolly from './StoryHolly'
import StoryTech from './StoryTech'
import StoryFit from './StoryFit'
// import StoryFood from './StoryFood'

function LatestStory() {
  return (
    <>
      <h1 className='line2'>Latest Story</h1>
       <div className='MainLatestStory'>
        <StoryBolly/>
        <StoryHolly/>
        <StoryTech/>
        <StoryFit/>
        {/* <StoryFood/> */}
       </div>
    </>
  )
}

export default LatestStory
