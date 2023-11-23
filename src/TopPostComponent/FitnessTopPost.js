import React, {useEffect, useState } from 'react'
import FitnessSingle from '../SingleComponent/FitnessSingle';
import { Link } from 'react-router-dom';
import axios from 'axios';

function FitnessTopPost() {
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
            <FitnessSingle/>
            {
                data.filter((item) => item.category === "Fitness" && item.id % 2 === 0).map((value, index) => {
                    return (
                        <div key={index} className='mixPart2'>
                            <img src={value.urlToImage} alt='look2' className='photo2' />
                            <div className='content2'>
                            <Link to={`/details/${value.id}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                            <p>{value.publishedAt}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
  )
}

export default FitnessTopPost
