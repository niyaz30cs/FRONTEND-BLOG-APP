import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../DataStore/DataPackage'
import Fitness from '../Component/Fitness';

function LatestArticleFit() {
    const[ArticleTech]=useContext(MyContext);
  return (
    <div>
      {
        ArticleTech.filter((item)=>item.category==="Fitness" && item.id===94).map((value,index)=>{
            return(
                <div key={index} className='LatestArticle'>
                    <img src={value.urlToImage} alt='look3' className='articleImage'/>
                    <div className='ArticleContent'>
                    <Link to={`/details/${Fitness.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                    <p>{value.description}</p>
                    <p>{value.publishedAt}</p>
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default LatestArticleFit
