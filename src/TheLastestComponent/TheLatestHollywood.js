import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function TheLatestHollywood() {
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
        data.filter((item)=>item.category==="Hollywood" &&item.id===26).map((value,index)=>{
          return(
            <div className='Thelatest' key={index}>
              <img src={value.urlToImage} alt='look' className='latestImage' />
              <div className='latestContent'>
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

export default TheLatestHollywood
