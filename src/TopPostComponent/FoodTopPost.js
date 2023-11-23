import React, {useEffect, useState } from 'react'
import FoodSingle from '../SingleComponent/FoodSingle';
import { Link } from 'react-router-dom';
import axios from 'axios';

function FoodTopPost() {
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
    <h1 className='line'>Top Post</h1>
    <FoodSingle/>
    {
        data.filter((item) => item.category === "Food" && item.id % 2 === 0).map((value, index) => {
            return (
                <div key={index} className='mixPart2'>
                    <img src={value.urlToImage} alt='look2' className='photo2' />
                    <div className='content2'>
                    <Link to={`/details/${value.id}`} state={value} className='removeLine'></Link><h3>{value.title}</h3>
                    <p>{value.publishedAt}</p>
                    </div>
                </div>
            )
        })
    }
</div>
  )
}

export default FoodTopPost
