import React, { useContext} from 'react'
// import DownArrow from "../downArrow.svg"
import { MyContext } from '../DataStore/DataPackage'
import FitnessTopPost from '../TopPostComponent/FitnessTopPost';
import { Link } from 'react-router-dom';

function Fitness() {
  // const[count,setCount]=useState(10);
  const [fitnessData] = useContext(MyContext);
  console.log(fitnessData);
  return (
    <>
      <h1 className='line'>Fitness</h1>
      <div className='viewbothSide'>
        <div className='singleView'>
          {
            fitnessData.filter((item) => item.category === "Fitness" && item.id % 2 === 0).map((value, index) => {
              return (
                <div key={index} className='mixPart'>
                  <img src={value.urlToImage} alt='look' className='photo' />
                  <div className='content'>
                    <Link to={`/details/${Fitness.title}`} state={value} className='removeLine'><h3>{value.title}</h3></Link>
                    <p className='size'>{value.description}</p>
                    <p>{value.publishedAt}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='topPost'>
          <FitnessTopPost />
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

export default Fitness
