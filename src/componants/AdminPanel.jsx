import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constant';

const AdminPanel = () => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);

    const fetchedUsers = async () => {
        const res = await axios.get(BASE_URL+ "/users");
        console.log(res?.data?.users);
        setUsers(res?.data?.users);
    };

    useEffect(()=>{
        fetchedUsers();
    },[]);

    const handleDelete = (id) => {
          setUsers(users.filter(user => user.id !== id));
      };
  
  
    // Filter users based on search
    const filteredUsers = users.filter(user =>
        user.firstName.toLowerCase().includes(search.trim().toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.trim().toLowerCase()) ||
        user.phone.toLowerCase().includes(search.trim().toLowerCase()) ||
        user.email.toLowerCase().includes(search.trim().toLowerCase())
    );

  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 className="text-xl font-semibold mb-4">User List</h2>

    {/* Search Bar */}
    <input
      type="text"
      placeholder="Search users..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-2 border rounded-md mb-4"
    />

    {/* User Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full border rounded-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="px-4 py-2">{user.firstName+ " "+ user.lastName}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.phone}</td>
                <td className="px-4 py-2 text-center">
                  <button className="text-blue-500 hover:underline mr-2">Edit</button>
                  <button onClick={()=>handleDelete(user.id)} className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default AdminPanel
