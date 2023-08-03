import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../DataStore/DataPackage'

function StoryFood() {
    const[foodStoryData]=useContext(MyContext);
  return (
    <div>
      {
        foodStoryData.filter((item)=>item.category==="Food" && item.id===83).map((value,index)=>{
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

export default StoryFood
