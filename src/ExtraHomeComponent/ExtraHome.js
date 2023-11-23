import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
// import "react-slideshow-image/dist/styles.css";
// import { Fade, Zoom, Slide } from "react-slideshow-image"

function ExtraHome() {
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
      {/* <Fade> */}
        {
          data.filter((item) => item.category === "Bollywood" && item.id===33).map((value, index) => {
            return (
              <div key={index} className='Extra'>
                <img src={value.urlToImage} alt='look3' className='extraImage' />
                <div className='extraContent'>
                  <Link to={`/details/${value.id}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                  <h4>{value.description}</h4>
                  <p>{value.publishedAt}</p>
                </div>
              </div>
            )
          })
        }
      {/* </Fade> */}
    </>
  )
}

export default ExtraHome
