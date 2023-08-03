import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../DataStore/DataPackage';
import Bollywood from '../Component/Bollywood';

function TheLatestBollywood() {
  const[theLatestBolly]=useContext(MyContext);
  return (
    <div>
      {
        theLatestBolly.filter((item)=>item.category==="Bollywood" &&item.id===44).map((value,index)=>{
          return(
            <div className='Thelatest' key={index}>
              <img src={value.urlToImage} alt='look' className='latestImage' />
              <div className='latestContent'>
              <Link to={`/details/${Bollywood.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
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

export default TheLatestBollywood;
