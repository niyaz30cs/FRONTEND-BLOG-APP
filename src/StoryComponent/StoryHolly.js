import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../DataStore/DataPackage'

function StoryHolly() {
    const[hollyStoryData]=useContext(MyContext);
  return (
    <div>
      {
        hollyStoryData.filter((item)=>item.category==="Hollywood" && item.id===1).map((value,index)=>{
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
    </div>
  )
}

export default StoryHolly
