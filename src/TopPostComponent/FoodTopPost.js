import React, { useContext } from 'react'
import { MyContext } from '../DataStore/DataPackage'
import FoodSingle from '../SingleComponent/FoodSingle';
import { Link } from 'react-router-dom';
import Food from '../Component/Food';

function FoodTopPost() {
    const[foodTopPost]=useContext(MyContext);
  return (
    <div>
    <h1 className='line'>Top Post</h1>
    <FoodSingle/>
    {
        foodTopPost.filter((item) => item.category === "Food" && item.id % 2 === 0).map((value, index) => {
            return (
                <div key={index} className='mixPart2'>
                    <img src={value.urlToImage} alt='look2' className='photo2' />
                    <div className='content2'>
                    <Link to={`/details/${Food.title}`} state={value} className='removeLine'></Link><h3>{value.title}</h3>
                    <p>{value.publishedAt}</p>
                    </div>
                </div>
            )
        })
    }
</div>
  )
}

export default FoodTopPost
