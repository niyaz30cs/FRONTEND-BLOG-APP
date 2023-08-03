import React, { useContext } from 'react'
import { MyContext } from '../DataStore/DataPackage'
import BollywoodSingle from '../SingleComponent/BollywoodSingle';
import { Link } from 'react-router-dom';
import Bollywood from '../Component/Bollywood';

function BollywoodTopPost() {
    const [bollyTopPost]=useContext(MyContext);
  return (
    <div>
      <h1 className='line'>Top Post</h1>
      <BollywoodSingle/>
      {
        bollyTopPost.filter((item)=>item.category==="Bollywood" && item.id%2===0).map((value,index)=>{
            return(
                <div key={index} className='mixPart2'>
                  <img src={value.urlToImage} alt='look2' className='photo2' />
                  <div className='content2'>
                  <Link to={`/details/${Bollywood.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                  <p>{value.publishedAt}</p>
                  </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default BollywoodTopPost
