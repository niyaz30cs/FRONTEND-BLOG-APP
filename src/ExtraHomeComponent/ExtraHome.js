import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../DataStore/DataPackage'
import Bollywood from '../Component/Bollywood';

function ExtraHome() {
  const[extraData]=useContext(MyContext);
  return (
    <>
            {
        extraData.filter((item)=>item.category==="Bollywood" && item.id===33).map((value,index)=>{
            return(
                <div key={index} className='Extra'>
                    <img src={value.urlToImage} alt='look3' className='extraImage'/>
                    <div className='extraContent'>
                    <Link to={`/details/${Bollywood.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                    <h4>{value.description}</h4>
                    <p>{value.publishedAt}</p>
                    </div>
                </div>
            )
        })
      }
    </>
  )
}

export default ExtraHome
