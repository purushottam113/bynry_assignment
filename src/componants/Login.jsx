import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-lg'>
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
      <button className='w-full mt-6 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'>Login</button>
    </div>
  )
}

export default Login
