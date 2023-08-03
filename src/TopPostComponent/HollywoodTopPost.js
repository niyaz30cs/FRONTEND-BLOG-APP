import React, { useContext } from 'react'
import { MyContext } from '../DataStore/DataPackage'
import HollywoodSingle from '../SingleComponent/HollywoodSingle';
import { Link } from 'react-router-dom';
import Hollywood from '../Component/Hollywood';

function HollywoodTopPost() {
    const [hollyTopPost] = useContext(MyContext);
    return (
        <div>
            <h1 className='line'>Top Post</h1>
            <HollywoodSingle/>
            {
                hollyTopPost.filter((item) => item.category === "Hollywood" && item.id % 2 === 0).map((value, index) => {
                    return (
                        <div key={index} className='mixPart2'>
                            <img src={value.urlToImage} alt='look2' className='photo2' />
                            <div className='content2'>
                            <Link to={`/details/${Hollywood.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                            <p>{value.publishedAt}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HollywoodTopPost
