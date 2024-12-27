import React from 'react'
import logo from '../assets/logo.png'
function navbar() {
  return (
    <div>
        <nav style={{display:'flex',
            alignContent:'center',
            justifyContent:'flex-start'
            }}>
          <div> <img src={logo} alt="" width={50} height={50} /></div>
          <h4 style={{color:'orange',fontFamily:'serif'}}>Lorem ipsum </h4>
        

        </nav>
      <hr /></div>
  )
}

export default navbar
