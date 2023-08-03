import React, { useContext } from 'react'
import { MyContext } from '../../DataStore/DataPackage'

function RightSideButtom() {
  const[HomeRightButtom]=useContext(MyContext);
  return (
    <div>
      {/* <h1>leftbuttom</h1> */}
      {
        HomeRightButtom.filter((item)=>item.category==="Bollywood" && item.id===41).map((value,index)=>{
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

export default RightSideButtom
