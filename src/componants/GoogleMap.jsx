import React from 'react'
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { useSearchParams } from 'react-router';

const GoogleMap = () => {
  const [searchParams] = useSearchParams();

  const lat = parseFloat(searchParams.get("lat"));
  const lng = parseFloat(searchParams.get("lng"));
  const name = searchParams.get("name");

  console.log(lat+","+ lng)

  if(!lat || !lng) return <p>Loading...</p>

  return (
    <APIProvider apiKey="AIzaSyCc_ox91OlYr4jwKFOKcady4iDNe_uwNx8">
      <p className="mx-auto bg-black text-white">{name + "`s map address"}</p>
      <Map
        className='w-screen h-screen'
        defaultCenter={{lat, lng}}
        defaultZoom={5}
        mapId="YOUR_MAP_ID" // Optional: for cloud-based map styling
      >
        <AdvancedMarker position={{lat, lng}} />
      </Map>
    </APIProvider>
  )
}

export default GoogleMap
