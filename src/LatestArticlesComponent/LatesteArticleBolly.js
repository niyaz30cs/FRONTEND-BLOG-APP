import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../DataStore/DataPackage'
import Bollywood from '../Component/Bollywood';

function LatesteArticleBolly() {
    const[ArticleBolly]=useContext(MyContext);
  return (
    <div>
      {
        ArticleBolly.filter((item)=>item.category==="Bollywood" && item.id===38).map((value,index)=>{
            return(
                <div key={index} className='LatestArticle'>
                    <img src={value.urlToImage} alt='look3' className='articleImage'/>
                    <div className='ArticleContent'>
                    <Link to={`/details/${Bollywood.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
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

export default LatesteArticleBolly
