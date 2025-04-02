import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [filterUsers, setFilterUsers] = useState([]);

    const fetchedUsers = async () => {
        const res = await axios.get("https://dummyjson.com/users");
        const tempUsers = res?.data?.users.map(({
                                          id, firstName, lastName, age,  image, 
                                          address: {state, country, coordinates: {lat, lng}},
                                          company: {name, title}
                                          })=>({
                                            id, firstName, lastName, age, image, state, country, lat, lng, name, title
                                          }));
        console.log(tempUsers);
        setUsers(tempUsers);
    };

    const findObjectByValue = (searchValue) => {
      const res = users.find(obj => Object.values(obj).includes(searchValue));
      console.log(res)
    };

    useEffect(()=>{
      const timer = setTimeout(()=>{
            console.log(searchValue)
            findObjectByValue(searchValue);
          },1000);
      return ()=> clearTimeout(timer);
    },[searchValue])

    useEffect(()=>{
        fetchedUsers();
    },[]);

    if(users.length === 0) return

  return (
    <div className='mt-5 flex flex-col mx-10'>
      <input
        type="text"
        className="p-2 border rounded w-full mb-4"
        value={searchValue}
        onChange={(e)=>setSearchValue(e.target.value)}
      />

      {/* filter */}
       <div className="flex" onClick={()=>findObjectByValue("35")}>
        <p className='m-10 bg-amber-300'> Filter</p>
        </div> 

      {/* /user list */}
        <div className='flex flex-wrap gap-3 justify-center'>
          {users.map((user)=><Card key={user.id} users ={user}/>)}
        </div>

    </div>
  )
}

export default Users;
