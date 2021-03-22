import React, { useState } from 'react'

const Hotel = ({hotel}) => {
  
  const [show, setShow] = useState(false)
  

  return (
    <div>
    <h2>{ hotel.name }</h2>
    { show && <div>
                {hotel.stars}
                {hotel.city} 
              </div> }
    { !show 
    ? <button onClick={() => setShow(!show)} >Show more</button> 
    : <button onClick={() => setShow(!show)} >Show less</button>}
  </div>
  )
}

export default Hotel
