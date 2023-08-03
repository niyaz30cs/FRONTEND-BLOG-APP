import React, { useContext } from 'react'
import { MyContext } from '../DataStore/DataPackage'
import { Link } from 'react-router-dom'
import Food from '../Component/Food'

function FoodSingle() {
    const[foodSingle]=useContext(MyContext)
  return (
    <div>
      {
        foodSingle.filter((item)=>item.category==="Food" && item.id===88).map((value,index)=>{
            return(
                <div key={index}>
                    <img src={value.urlToImage} alt='look3' className='singleImage'/>
                    <Link to={`/details/${Food.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                    <p className='size'>{value.description}</p>
                    <p>{value.publishedAt}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default FoodSingle
