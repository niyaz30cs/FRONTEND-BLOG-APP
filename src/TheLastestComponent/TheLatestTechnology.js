import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../DataStore/DataPackage'
import Technology from '../Component/Technology';

function TheLatestTechnology() {
    const[theLatestTech]=useContext(MyContext);
  return (
    <div>
            {
        theLatestTech.filter((item)=>item.category==="Technology" &&item.id===53).map((value,index)=>{
          return(
            <div className='Thelatest' key={index}>
              <img src={value.urlToImage} alt='look' className='latestImage' />
              <div className='latestContent'>
              <Link to={`/details/${Technology.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
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

export default TheLatestTechnology
