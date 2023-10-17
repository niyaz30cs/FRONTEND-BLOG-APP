import React, { useContext} from 'react'
// import DownArrow from "../downArrow.svg";
import { MyContext } from '../DataStore/DataPackage'
import TechnologyTopPost from '../TopPostComponent/TechnologyTopPost';
import { Link } from 'react-router-dom';

function Technology() {
  // const[count,setCount]=useState(10);
  const [technologyData] = useContext(MyContext);
  console.log(technologyData);
  return (
    <>
      <h1 className='line'>Technology</h1>
      <div className='viewbothSide'>
        <div className='singleView'>
          {
            technologyData.filter((item) => item.category === "Technology" && item.id % 2 === 0).map((value, index) => {
              return (
                <div key={index} className='mixPart'>
                  <img src={value.urlToImage} alt='look' className='photo' />
                  <div className='content'>
                    <Link to={`/details/${Technology.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                    <p className='size'>{value.description}</p>
                    <p>{value.publishedAt}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='topPost'>
          <TechnologyTopPost />
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

export default Technology
