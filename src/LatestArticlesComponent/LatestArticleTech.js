import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../DataStore/DataPackage'
import Technology from '../Component/Technology';

function LatestArticleTech() {
    const[ArticleTech]=useContext(MyContext);
  return (
    <div>
      {
        ArticleTech.filter((item)=>item.category==="Technology" && item.id===60).map((value,index)=>{
            return(
                <div key={index} className='LatestArticle'>
                    <img src={value.urlToImage} alt='look3'className='articleImage'/>
                    <div className='ArticleContent'>
                    <Link to={`/details/${Technology.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
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

export default LatestArticleTech
