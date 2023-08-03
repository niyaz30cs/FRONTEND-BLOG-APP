import React, { useContext } from 'react'
import { MyContext } from '../../DataStore/DataPackage'

function RightSideTop() {
  const[HomeRightTop]=useContext(MyContext);
  return (
    <div>
      {/* <h1>leftTop</h1> */}
      {
        HomeRightTop.filter((item)=>item.category==="Bollywood" && item.id===42).map((value,index)=>{
          return(
               <div key={index}>
                  <img src={value.urlToImage} alt='look' className='homeImage2'/>
                  <h3 className='setValue2'>{value.title}</h3>
               </div>
          )
        })
      }
    </div>
  )
}

export default RightSideTop
