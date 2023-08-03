import React, { useContext } from 'react'
import { MyContext } from '../DataStore/DataPackage'
import { Link } from 'react-router-dom';
import Bollywood from '../Component/Bollywood';

function BollywoodSingle() {
    const[bollySingle]=useContext(MyContext);
  return (
    <div>
      {
        bollySingle.filter((item)=>item.category==="Bollywood" && item.id===40).map((value,index)=>{
            return(
                <div key={index} className='single'>
                    <img src={value.urlToImage} alt='look3' className='singleImage'/>
                    <Link to={`/details/${Bollywood.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                    <p className='size'>{value.description}</p>
                    <p>{value.publishedAt}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default BollywoodSingle
