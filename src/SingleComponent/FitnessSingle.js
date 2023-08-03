import React, { useContext } from 'react'
import { MyContext } from '../DataStore/DataPackage'
import { Link } from 'react-router-dom';
import Fitness from '../Component/Fitness';

function FitnessSingle() {
    const[fitSingle]=useContext(MyContext);
  return (
    <div>
      {
        fitSingle.filter((item)=>item.category==="Fitness" && item.id===111).map((value,index)=>{
            return(
                <div key={index}>
                    <img src={value.urlToImage} alt='look3' className='singleImage'/>
                    <Link to={`/details/${Fitness.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                    <p className='size'>{value.description}</p>
                    <p>{value.publishedAt}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default FitnessSingle
