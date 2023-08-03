import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../DataStore/DataPackage'
import Hollywood from '../Component/Hollywood';

function TheLatestHollywood() {
    const[theLatestHolly]=useContext(MyContext);
  return (
    <div>
            {
        theLatestHolly.filter((item)=>item.category==="Hollywood" &&item.id===26).map((value,index)=>{
          return(
            <div className='Thelatest' key={index}>
              <img src={value.urlToImage} alt='look' className='latestImage' />
              <div className='latestContent'>
              <Link to={`/details/${Hollywood.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
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
