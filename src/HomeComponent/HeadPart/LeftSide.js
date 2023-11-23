import React, { useEffect, useState } from 'react'
import axios from 'axios';

function LeftSide() {
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
      {/* <h1>Rightside</h1> */}
      {
        data.filter((item)=>item.category==="Bollywood" && item.id===50).map((value,index)=>{
          return(
               <div key={index}>
                  <img src={value.urlToImage} alt='look' className='homeImage1'/>
                  <h3 className='setValue1'>{value.title}</h3>
               </div>
          )
        })
      }
    </div>
  )
}

export default LeftSide
