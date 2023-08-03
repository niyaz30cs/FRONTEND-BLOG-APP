import React, { useContext } from 'react'
import { MyContext } from '../DataStore/DataPackage'
import TechnologySingle from '../SingleComponent/TechnologySingle';
import { Link } from 'react-router-dom';
import Technology from '../Component/Technology';

function TechnologyTopPost() {
    const[techTopPost]=useContext(MyContext);
  return (
    <div>
    <h1 className='line'>Top Post</h1>
    <TechnologySingle/>
    {
        techTopPost.filter((item) => item.category === "Technology" && item.id % 2 === 0).map((value, index) => {
            return (
                <div key={index} className='mixPart2'>
                    <img src={value.urlToImage} alt='look2' className='photo2' />
                    <div className='content2'>
                   <Link to={`/details/${Technology.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                    <p>{value.publishedAt}</p>
                    </div>
                </div>
            )
        })
    }
</div>
  )
}

export default TechnologyTopPost
