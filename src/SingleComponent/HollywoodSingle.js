import React, { useContext } from 'react'
import { MyContext } from '../DataStore/DataPackage'
import { Link } from 'react-router-dom';
import Hollywood from '../Component/Hollywood';

function HollywoodSingle() {
    const[hollySingle]=useContext(MyContext);
  return (
    <div>
      {
        hollySingle.filter((item)=>item.category==="Hollywood" && item.id===15).map((value,index)=>{
            return(
                <div key={index}>
                    <img src={value.urlToImage} alt='look3' className='singleImage'/>
                    <Link to={`/details/${Hollywood.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                    <p className='size'>{value.description}</p>
                    <p>{value.publishedAt}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default HollywoodSingle
