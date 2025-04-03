import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { BASE_URL } from '../utils/constant';

const EditUser = () => {
  const [error, setError] = useState(false);
  const [userUpdate ,setUserUpdate] = useState(false);
  const [user, setUser] = useState({
      image: "",
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      country: "",
      state: "",
      postalcode: "",
      gender: "",
      phone: "",
      name: "",
      department: "",
      title: "",
  });

  const {userid} = useParams();
  const isLogin = useSelector((store)=> store.admin);
  const navigate = useNavigate();

  const handleEdit = async () => {
    try {
        const res = await axios.put(BASE_URL+ "/users/"+ userid,{
                            user
                            })
        if(res?.status == 200){
          setError(false);
          return setUserUpdate(true)
        }
        setError(true);
    } catch (err) {
        console.log(err);
    }
  }

  const fetchUser = async ()=> {
    const res = await axios.get(BASE_URL +  "/users/" + userid);
    const {image, firstName, lastName, age, email, phone} = res?.data;
    const {country, state, postalcode} = res?.data?.address;
    const {name, title, department} = res?.data?.company;
    setUser({image, firstName, lastName, age, email, country, state, postalcode, name, title, department, phone});
  }

  useEffect(()=>{
    if(!isLogin){
        return navigate("/adminlogin")
    }
    fetchUser();
  },[])

  return (
    <div className='w-full max-w-md p-6 bg-white rounded-lg shadow-lg mx-auto sm:mt-10'>
      <p className="text-2xl font-bold text-center text-gray-800">Edit User</p>

      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">first Name</label>
        <input name='firstName' type="text" value={user.firstName} onChange={(e)=>setUser({ ...user, [e.target.name]: e.target.value })} required
            className='w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300'/>
      </div>

      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Last Name</label>
        <input name='lastName' type="text" value={user.lastName} onChange={(e)=>setUser({ ...user, [e.target.name]: e.target.value })} required
                className='w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300'/>
      </div>
      
      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Image URL</label>
        <input name="image" type="text" value={user.image} onChange={(e)=>setUser({ ...user, [e.target.name]: e.target.value })} required
                className='w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300'/>
      </div>

      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Age</label>
        <input name="age" type="text" value={user.age} onChange={(e)=>setUser({ ...user, [e.target.name]: e.target.value })} required
                className='w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300'/>
      </div>

      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Gender</label>
        <input name="gender" type="text" value={user.gender} onChange={(e)=>setUser({ ...user, [e.target.name]: e.target.value })} required
                className='w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300'/>
      </div>

      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
        <input name="phone" type="text" value={user.phone} onChange={(e)=>setUser({ ...user, [e.target.name]: e.target.value })} required
                className='w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300'/>
      </div>

      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">State</label>
        <input name="state" type="text" value={user.state} onChange={(e)=>setUser({ ...user, [e.target.name]: e.target.value })} required
                className='w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300'/>
      </div>

      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Country</label>
        <input name="country" type="text" value={user.country} onChange={(e)=>setUser({ ...user, [e.target.name]: e.target.value })} required
                className='w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300'/>
      </div>

      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Postal Code</label>
        <input name="postalcode" type="text" value={user.postalcode} onChange={(e)=>setUser({ ...user, [e.target.name]: e.target.value })} required
                className='w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300'/>
      </div>

      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Company Name</label>
        <input name="name" type="text" value={user.name} onChange={(e)=>setUser({ ...user, [e.target.name]: e.target.value })} required
                className='w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300'/>
      </div>

      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Department</label>
        <input name="department" type="text" value={user.department} onChange={(e)=>setUser({ ...user, [e.target.name]: e.target.value })} required
                className='w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300'/>
      </div>

      <div className="mb-2">
        <label className="block text-sm font-medium text-gray-700">Designation</label>
        <input name="title" type="text" value={user.title} onChange={(e)=>setUser({ ...user, [e.target.name]: e.target.value })} required
                className='w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-blue-300'/>
      </div>

      <p className="pl-2 text-sm text-red-600">{error?"Invalid Credentials":""}</p>
      <p className="pl-2 text-lg text-blue-600">{userUpdate?"Changes Saved":""}</p>

      <button className='w-full mt-6 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'
              onClick={handleEdit}>Save Changes</button>
    </div>
  )
}

export default EditUser;
