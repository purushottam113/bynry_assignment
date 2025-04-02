import React from 'react'
import { useNavigate } from 'react-router'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='sticky w-full flex justify-between px-5 py-5 bg-amber-100 '>
      <p onClick={()=>navigate("/")}>BYNRY_HOME</p>
      <button onClick={()=>navigate("/adminlogin")} className="">Admin Login</button>
    </div>
  )
}

export default Navbar
