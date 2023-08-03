import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../DataStore/DataPackage'

function StoryBolly() {
    const[bollyStoryData]=useContext(MyContext);
  return (
    <>
      {
        bollyStoryData.filter((item)=>item.category==="Bollywood" && item.id===38).map((value,index)=>{
            return(
                <div key={index} className='LatestStory'>
                    {/* <div className='storyContent'> */}
                    <Link to="#" className='removeLine'><h3>{value.title}</h3></Link>
                    <p>{value.description}</p>
                    <p>{value.publishedAt}</p>
                    {/* </div> */}
                </div>
            )
        })
      }
    </>
  )
}

export default StoryBolly
