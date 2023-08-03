import React from 'react'
import LatesteArticleBolly from './LatesteArticleBolly'
import LatestArticleHolly from './LatestArticleHolly'
import LatestArticleTech from './LatestArticleTech'
import LatestArticleFit from './LatestArticleFit'
import LatestArticleFood from './LatestArticleFood'
import ExtraHome from '../ExtraHomeComponent/ExtraHome'

function LatestArticles() {
  return (
    <div>
      <h1 className='line2'>Latest Articles</h1>
      <div className='AllLatestArticle'>
        <LatesteArticleBolly/>
        <LatestArticleHolly/>
        <LatestArticleTech/>
        <LatestArticleFit/>
        <LatestArticleFood/>
        <ExtraHome/>
        </div> 
    </div>
  )
}

export default LatestArticles
