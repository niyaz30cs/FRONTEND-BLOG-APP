import React, { useContext,useState } from 'react'
import DownArrow from "../downArrow.svg"
import{Link} from "react-router-dom";
import { MyContext } from '../DataStore/DataPackage'
import BollywoodTopPost from '../TopPostComponent/BollywoodTopPost';

function Bollywood() {
  const[count,setCount]=useState(10);
  const [bollywoodData] = useContext(MyContext);
  console.log(bollywoodData);
  return (
    <>
      <h1 className='line'>Bollywood</h1>
      <div className='viewbothSide'>
        <div className='singleView'>
          {
            bollywoodData.filter((item) => item.category === "Bollywood" && item.id % 2 === 0).map((value, index) => {
              console.log(value);
              return (
                <div key={index} className='mixPart'>
                  <img src={value.urlToImage} alt='look' className='photo' />
                  <div className='content'>
                  <Link to={`/details/${Bollywood.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                  <p className='size'>{value.description}</p>
                  <p>{value.publishedAt}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='topPost'>
          <BollywoodTopPost />
        </div>
      </div>
      {
        <button onClick={() => {setCount(count + 3);}}
           className='btnarrow'>Load More <img src={DownArrow} alt='down2' />
        </button>
      }
    </>
  )
}

export default Bollywood
