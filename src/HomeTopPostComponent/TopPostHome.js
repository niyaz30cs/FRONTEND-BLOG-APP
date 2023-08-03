import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../DataStore/DataPackage'
import BollywoodSingle from '../SingleComponent/BollywoodSingle';
import Bollywood from '../Component/Bollywood';

function TopPostHome() {
    const[HomeTopPost]=useContext(MyContext);
  return (
    <div>
        <div className='Advertise'><h1>Advertisement</h1></div>
      <h1 className='line'>Top Post</h1>
      <BollywoodSingle/>
      {
        HomeTopPost.filter((item)=>item.category==="Bollywood" && item.id%4===0).map((value,index)=>{
            return(
                <div key={index} className='HomeTopPost'>
                  <img src={value.urlToImage} alt='look2'className='homeTopPostImg' />
                  <div className='homeTopPostContent'>
                  <Link to={`/details/${Bollywood.title}`} state={value} className='removeLine'><h4>{value.title}</h4></Link>
                  <p>{value.publishedAt}</p>
                  </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default TopPostHome
