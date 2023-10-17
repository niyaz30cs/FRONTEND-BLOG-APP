import React, { useContext} from 'react'
// import DownArrow from "../downArrow.svg"
import { MyContext } from '../DataStore/DataPackage'
import HollywoodTopPost from '../TopPostComponent/HollywoodTopPost';
import { Link } from 'react-router-dom';

function Hollywood() {
  // const[count,setCount]=useState(10);
  const [hollywoodData] = useContext(MyContext)
  console.log(hollywoodData);
  return (
    <>
      <h1 className='line'>Hollywood</h1>
      <div className='viewbothSide'>
        <div className='singleView'>
          {
            hollywoodData.filter((item) => item.category === "Hollywood" && item.id % 2 === 0).map((value, index) => {
              return (
                <div key={index} className='mixPart'>
                  <img src={value.urlToImage} alt='look' className='photo' />
                  <div className='content'>
                    <Link to={`/details/${Hollywood.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                    <p className='size'>{value.description}</p>
                    <p>{value.publishedAt}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='topPost'>
          <HollywoodTopPost />
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

export default Hollywood
