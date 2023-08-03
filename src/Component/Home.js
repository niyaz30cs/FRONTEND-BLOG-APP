import React from 'react'
import "../Home.css"
import LeftSide from '../HomeComponent/HeadPart/LeftSide'
import RightSideTop from '../HomeComponent/HeadPart/RightSideTop'
import RightSideButtom from '../HomeComponent/HeadPart/RightSideButtom'
import TheLatest from '../TheLastestComponent/TheLatest'
import LatestArticles from '../LatestArticlesComponent/LatestArticles'
import TopPostHome from '../HomeTopPostComponent/TopPostHome'
import LatestStory from '../StoryComponent/LatestStory'

function Home() {
  return (
    <>
    <div className='grid'>
      {/* <h1>Home</h1> */}
      <div className='box1'>
      <LeftSide/>
      </div>
      <div className='box2'>
      <RightSideTop/>
      </div>
      <div className='box3'>
      <RightSideButtom/>
      </div>
    </div>
    <TheLatest/>
    <div className='ArticleTop'>
      <LatestArticles/>
      <TopPostHome/>
    </div>
    <LatestStory/>
    </>
  )
}

export default Home
