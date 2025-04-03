import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import Card from './Card';
import { BASE_URL } from '../utils/constant';

const Users = () => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);

    const fetchedUsers = async () => {
        const res = await axios.get(BASE_URL+ "/users");
        const tempUsers = res?.data?.users.map(({
                                          id, firstName, lastName, age,  image, email, phone,
                                          address: {state, country, coordinates: {lat, lng}},
                                          company: {name, title}
                                          })=>({
                                            id, firstName, lastName, age: age.toString(), image, state, country, lat, lng, name, title, email, phone
                                          }));
        setUsers(tempUsers);
    };

    
    useEffect(()=>{
        fetchedUsers();
    },[]);

    const filteredUsers = users.filter(user =>
      user.firstName.toLowerCase().includes(search.trim().toLowerCase()) ||
      user.lastName.toLowerCase().includes(search.trim().toLowerCase()) ||
      user.state.toLowerCase().includes(search.trim().toLowerCase()) ||
      user.state.toLowerCase().includes(search.trim().toLowerCase()) ||
      user.age.toLowerCase().includes(search.trim().toLowerCase())
    );


  return (
    <div className='mt-5 flex flex-col mx-10'>

      <input
        type="text"
        placeholder='Serach by name, address, age, company name'
        className="p-2 border rounded w-full mb-4"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      {/* /user list */}
      {filteredUsers.length > 0 ? (        
        <div className='flex flex-wrap gap-3 justify-center'>
          {filteredUsers.map((user)=><Card key={user.id} users ={user}/>)}
        </div>):
        (<div className="text-center py-4 text-gray-500">
          No users found.
        </div>)
      }

    </div>
  )
}

export default Users;
