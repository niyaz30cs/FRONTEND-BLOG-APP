import React, { useContext} from 'react'
// import DownArrow from "../downArrow.svg"
import { MyContext } from '../DataStore/DataPackage'
import FoodTopPost from '../TopPostComponent/FoodTopPost';
import { Link } from 'react-router-dom';

function Food() {
  // const[count,setCount]=useState(10);
  const [foodData] = useContext(MyContext);
  console.log(foodData);
  return (
    <>
      <h1 className='line'>Food</h1>
      <div className='viewbothSide'>
        <div className='singleView'>
          {
            foodData.filter((item) => item.category === "Food" && item.id % 2 === 0).map((value, index) => {
              return (
                <div key={index} className='mixPart'>
                  <img src={value.urlToImage} alt='look' className='photo' />
                  <div className='content'>
                    <Link to={`/details/${Food.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                    <p className='size'>{value.description}</p>
                    <p>{value.publishedAt}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='topPost'>
          <FoodTopPost />
        </div>
      </div>
      {/* {
        <button onClick={() => {setCount(count + 3);}}
           className='btnarrow'>Load More <img src={DownArrow} alt='down2' />
        </button>
      } */}
    </>
  )
}

export default Food
