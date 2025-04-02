import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constant';
import { useParams } from 'react-router';

const Profile = () => {
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

    const fetchProfile = async ()=> {
        const res = await axios.get(BASE_URL +  "/users/" + userid);
        console.log(res?.data)
        const {image, firstName, lastName, age, email, phone} = res?.data;
        const {country, state, postalcode} = res?.data?.address;
        const {name, title, department} = res?.data?.company;
        setUser({image, firstName, lastName, age, email, country, state, postalcode, name, title, department, phone});
      }

      useEffect(()=>{
        fetchProfile();
      },[]);

    //   if(user["firstName"] === "") return

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-max p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Profile</h2>
        <div className="mt-4 grid grid-cols-2 gap-y-2 items-center">
        
          <p className="text-lg font-medium text-gray-700 inline-block">First Name: </p> 
          <span className="font-normal text-lg text-gray-700">{user.firstName}</span>
          <p className="text-lg font-medium text-gray-700">Last Name:</p> 
          <span className="font-normal text-lg text-gray-700">{user.lastName}</span>
          <p className="text-lg font-medium text-gray-700">Age:</p>
          <span className="font-normal text-lg text-gray-700">{user.age}</span>
          <p className="text-lg font-medium text-gray-700">Address:</p>
          <span className="font-normal text-lg text-gray-700">{`${user.state}, ${user.country}, ${user.postalcode}`}</span>
          <p className="text-lg font-medium text-gray-700">Email:</p>
          <span className="font-normal text-lg text-gray-700">{user.email}</span>
          <p className="text-lg font-medium text-gray-700">Phone:</p>
          <span className="font-normal text-lg text-gray-700">{user.phone}</span>
          <p className="text-lg font-medium text-gray-700">Company:</p>
          <span className="font-normal text-lg text-gray-700">{user.name}</span>
          <p className="text-lg font-medium text-gray-700">Department:</p>
          <span className="font-normal text-lg text-gray-700">{user.department}</span>
          <p className="text-lg font-medium text-gray-700">Designation:</p>
          <span className="font-normal text-lg text-gray-700">{user.title}</span>
        </div>
      </div>
    </div>
  )
}

export default Profile
