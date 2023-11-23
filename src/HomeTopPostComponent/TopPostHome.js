import React, { useEffect, useState } from 'react'
// import "./video.css";
import { Link } from 'react-router-dom';
import BollywoodSingle from '../SingleComponent/BollywoodSingle';
import Bollywood from '../Component/Bollywood';
// import Video from '../VideoComponent/Video';
// import baloon from "../VideoComponent/baloon.mp4"
import addvideo from "../VideoComponent/Addvideo.mp4"
import axios from 'axios';
// import love from "../VideoComponent/love-036.mp4"

function TopPostHome() {
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
      <div className='Advertise'>
        <video src={addvideo} autoPlay loop muted={true} className='video' />
        {/* <video src={love} autoPlay loop muted className='video' /> */}
        {/* <Video/> */}
        <div className='AddName'><h1>Advertisement</h1></div>
      </div>
      <h1 className='line'>Top Post</h1>
      <BollywoodSingle />
      {
        data.filter((item) => item.category === "Bollywood" && item.id % 4 === 0).map((value, index) => {
          return (
            <div key={index} className='HomeTopPost'>
              <img src={value.urlToImage} alt='look2' className='homeTopPostImg' />
              <div className='homeTopPostContent'>
                <Link to={`/details/${Bollywood.title}`} state={value} className='removeLine'><h4>{value.title}</h4></Link>
                <p>{value.publishedAt}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default TopPostHome
