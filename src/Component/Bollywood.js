import React, {useEffect, useState} from 'react'
// import DownArrow from "../downArrow.svg"
import{Link} from "react-router-dom";
import BollywoodTopPost from '../TopPostComponent/BollywoodTopPost';
import axios from 'axios';

function Bollywood() {
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
      <h1 className='line'>Bollywood</h1>
      <div className='viewbothSide'>
        <div className='singleView'>
          {
            data.filter((item) => item.category === "Bollywood" && item.id % 2 === 0).map((value, index) => {
              console.log(value);
              return (
                <div key={index} className='mixPart'>
                  <img src={value.urlToImage} alt='look' className='photo' />
                  <div className='content'>
                  <Link to={`/details/${value.id}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                  <p className='size'>{value.description.slice(0,140)}</p>
                  <p>{value.publishedAt}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='topPost'>
          <BollywoodTopPost />
        </div>
      </div>
      {/* {
        <button onClick={() => {setCount(count + 3);}}
           className='btnarrow'>Load More <img src={DownArrow} alt='down2' />
        </button>
      } */}
    </>
  )
}

export default Bollywood
