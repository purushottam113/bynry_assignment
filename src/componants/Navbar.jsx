import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router'
import { adminLogin } from '../utils/adminSlice';

const Navbar = () => {
  const isLogin = useSelector((store)=>store.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = ()=> {
    dispatch(adminLogin(false));
  }

  return (
    <div className='ticky top-0 w-full flex justify-between items-center px-6 py-4 bg-blue-50 shadow-md'>
      <p className='text-blue-700 font-semibold text-lg cursor-pointer hover:text-gray-500 transition' onClick={()=>navigate("/")}>BYNRY_HOME</p>
      {isLogin?
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition">Logout</button>:
        <button onClick={()=>navigate("/adminlogin")} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">Admin Panel</button>
      }
    </div>
  )
}

export default Navbar
