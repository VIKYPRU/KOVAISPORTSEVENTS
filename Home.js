import React from 'react'

export default function Home() {
  const handleclick=()=>{


  }
  return (
    <div>
      <div className='title'>
      <h1 >WELCOME TO THE KOVAI SPORTS EVENTS</h1>
      <h3>Participate the sports events now</h3>
      <button className='btn-events' type='submit' onClick={(handleclick)}>Book Events</button>
      
      </div>
  

      <img className="hmimg"src="https://nektony.com/wp-content/uploads/2022/05/sport_anywhere_ntext@2x.png"
      style={{width:"100vw", height:"95vh"}}/>
    


    </div>
  )
}
