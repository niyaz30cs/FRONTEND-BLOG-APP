import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../DataStore/DataPackage'
import Fitness from '../Component/Fitness';

function TheLatestFitness() {
    const [theLatestFit] = useContext(MyContext);
    return (
        <div>
            {
                theLatestFit.filter((item) => item.category === "Fitness" && item.id === 96).map((value, index) => {
                    return (
                        <div className='Thelatest' key={index}>
                            <img src={value.urlToImage} alt='look' className='latestImage' />
                            <div className='latestContent'>
                            <Link to={`/details/${Fitness.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
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

export default TheLatestFitness
