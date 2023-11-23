import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function LatestArticleFood() {
    const[data,setData]=useState([])

    useEffect(()=>{
      axios.get("https://backend-api-rg16.onrender.com/api/blog")
      .then((res)=>{
        setData(res.data)
      })
      .catch((error)=>{
        console.log(error);
      })
    },[data])
  return (
    <div>
      {
        data.filter((item)=>item.category==="Food" && item.id===91).map((value,index)=>{
            return(
                <div key={index} className='LatestArticle'>
                    <img src={value.urlToImage} alt='look3' className='articleImage'/>
                    <div className='ArticleContent'>
                    <Link to={`/details/${value.id}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
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
