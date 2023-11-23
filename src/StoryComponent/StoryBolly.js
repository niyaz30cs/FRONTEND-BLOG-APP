import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function StoryBolly() {
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
    <>
      {
        data.filter((item)=>item.category==="Bollywood" && item.id===38).map((value,index)=>{
            return(
                <div key={index} className='LatestStory'>
                    {/* <div className='storyContent'> */}
                    <Link to="#" className='removeLine'><h3>{value.title}</h3></Link>
                    <p>{value.description}</p>
                    <p>{value.publishedAt}</p>
                    {/* </div> */}
                </div>
            )
        })
      }
    </>
  )
}

export default StoryBolly
