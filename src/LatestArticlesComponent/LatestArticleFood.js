import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../DataStore/DataPackage'
import Food from '../Component/Food';

function LatestArticleFood() {
    const[ArticleFood]=useContext(MyContext);
  return (
    <div>
      {
        ArticleFood.filter((item)=>item.category==="Food" && item.id===91).map((value,index)=>{
            return(
                <div key={index} className='LatestArticle'>
                    <img src={value.urlToImage} alt='look3' className='articleImage'/>
                    <div className='ArticleContent'>
                    <Link to={`/details/${Food.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
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

export default LatestArticleFood
