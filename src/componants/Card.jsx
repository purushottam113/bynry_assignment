import React from 'react'
import { useNavigate } from 'react-router';

const Card = ({users}) => {
    const navigate = useNavigate();

    const {id, firstName, lastName, age, image, state, country, lat, lng, name, title} = users;

  return (
    <div className='sm:w-1/3 sm:h-auto bg-blue-100 rounded-xl my-3'>
        <div className="" onClick={()=>navigate(`/profile/${id}`)}>
            <div className="flex gap-2 p-2">
              <img src={image} alt="img" />
              <p className="font-semibold">{firstName + " "+ lastName + ", "+ age}</p>
            </div>
            <p className='px-2'>🏠 {country}</p>
            <p className='px-2'>{`💻 ${title} at ${name}`}</p>
        </div>
        <button onClick={()=>navigate(`/map?lat=${lat}&lng=${lng}&name=${firstName + " " + lastName}`)}
        className="border solid rounded-b-xl bg-blue-600 p-2 mt-2 w-full">Summary</button>
    </div>
  )
}

export default Card
