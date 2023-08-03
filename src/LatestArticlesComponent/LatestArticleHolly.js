import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../DataStore/DataPackage'
import Hollywood from '../Component/Hollywood';

function LatestArticleHolly() {
    const[ArticleHolly]=useContext(MyContext);
  return (
    <div>
      {
        ArticleHolly.filter((item)=>item.category==="Hollywood" && item.id===4).map((value,index)=>{
            return(
                <div key={index} className='LatestArticle'>
                    <img src={value.urlToImage} alt='look3' className='articleImage'/>
                    <div className='ArticleContent'>
                    <Link to={`/details/${Hollywood.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
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

export default LatestArticleHolly
