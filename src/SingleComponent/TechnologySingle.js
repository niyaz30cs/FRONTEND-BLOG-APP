import React, {useContext } from 'react'
import { MyContext } from '../DataStore/DataPackage'
import { Link } from 'react-router-dom';
import Technology from '../Component/Technology';

function TechnologySingle() {
    const[techSingle]=useContext(MyContext);
  return (
    <div>
      {
        techSingle.filter((item)=>item.category==="Technology" && item.id===59).map((value,index)=>{
            return(
                <div key={index}>
                    <img src={value.urlToImage} alt='look3' className='singleImage'/>
                    <Link to={`/details/${Technology.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                    <p className='size'>{value.description}</p>
                    <p>{value.publishedAt}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default TechnologySingle
