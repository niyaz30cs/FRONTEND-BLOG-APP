import React, { useContext } from 'react'
import { MyContext } from '../DataStore/DataPackage'
import FitnessSingle from '../SingleComponent/FitnessSingle';
import { Link } from 'react-router-dom';
import Fitness from '../Component/Fitness';

function FitnessTopPost() {
    const[fitTopPost]=useContext(MyContext);
  return (
    <div>
            <h1 className='line'>Top Post</h1>
            <FitnessSingle/>
            {
                fitTopPost.filter((item) => item.category === "Fitness" && item.id % 2 === 0).map((value, index) => {
                    return (
                        <div key={index} className='mixPart2'>
                            <img src={value.urlToImage} alt='look2' className='photo2' />
                            <div className='content2'>
                            <Link to={`/details/${Fitness.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                            <p>{value.publishedAt}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
  )
}

export default FitnessTopPost
