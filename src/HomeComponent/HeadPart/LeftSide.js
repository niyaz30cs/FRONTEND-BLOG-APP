import React, { useContext } from 'react'
import { MyContext } from '../../DataStore/DataPackage'

function LeftSide() {
  const[Homeleft]=useContext(MyContext);
  return (
    <div>
      {/* <h1>Rightside</h1> */}
      {
        Homeleft.filter((item)=>item.category==="Bollywood" && item.id===50).map((value,index)=>{
          return(
               <div key={index}>
                  <img src={value.urlToImage} alt='look' className='homeImage1'/>
                  <h3 className='setValue1'>{value.title}</h3>
               </div>
          )
        })
      }
    </div>
  )
}

export default LeftSide
