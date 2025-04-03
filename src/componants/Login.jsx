import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { adminLogin } from '../utils/adminSlice';
import { adminpassword, adminUsername } from '../utils/constant';
import { useNavigate } from 'react-router';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = ()=> {
      if(username === adminUsername && password === adminpassword){
        setError(false)
        dispatch(adminLogin(true));
        navigate("/admin");
      }
      else{
        setError(true);
      };
    };

  return (
    <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-lg mx-auto sm:mt-10'>
        <p className="text-2xl font-bold text-center text-gray-800">Login</p>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Username</label>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required
            className='w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300'/>
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required
            className='w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300'/>
      </div>
      <p className="pl-2 text-sm text-red-600">{error?"Invalid Credentials":""}</p>
      <button className='w-full mt-6 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
              onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
