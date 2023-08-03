import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../DataStore/DataPackage'
import Food from '../Component/Food';

function TheLatestFood() {
    const [theLatestFood] = useContext(MyContext);
    return (
        <div>
            {
                theLatestFood.filter((item) => item.category === "Food" && item.id === 87).map((value, index) => {
                    return (
                        <div className='Thelatest' key={index}>
                            <img src={value.urlToImage} alt='look' className='latestImage' />
                            <div className='latestContent'>
                            <Link to={`/details/${Food.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
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

export default TheLatestFood
