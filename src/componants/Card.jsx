import React from 'react'
import { useNavigate } from 'react-router';

const Card = ({users}) => {
    const navigate = useNavigate();

    const {id, firstName, lastName, age, image, state, country, lat, lng, name, title} = users;

  return (
    <div className='w-full flex flex-col sm:w-1/3 bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-2xl'>
        <div className="cursor-pointer p-4" onClick={()=>navigate(`/profile/${id}`)}>
            <div className="flex items-center gap-4">
              <img src={image} alt="img" className='w-16 h-16 rounded-full object-cover border-2 border-blue-500' />
              <p className="ext-lg font-semibold text-gray-800">{firstName + " "+ lastName + ", "+ age}</p>
            </div>
            <p className='text-gray-600 mt-2 px-1'>🏠 {state+", "+country}</p>
            <p className='text-gray-700 px-1'>{`💻 ${title} at ${name}`}</p>
        </div>
        <button onClick={()=>navigate(`/map?lat=${lat}&lng=${lng}&name=${firstName + " " + lastName}`)}
        className="w-full bg-blue-600 text-white py-2 text-center font-medium rounded-b-xl transition hover:bg-blue-700 mt-auto">Summary</button>
    </div>
  )
}

export default Card
