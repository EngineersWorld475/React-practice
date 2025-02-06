import React from 'react'
import Travelspot from './Travelspot'
import locations from '../../db/locations'

const LocationsPage = () => {
    console.log(locations)
  return (
    <div className='tourist_locations'>
      {locations?.map((item) => (
        <Travelspot key={item.id} location_name={item.location_name} country={item.country} date={item.date} image={item.image} description={item.description}/>
      )
        
      )}
    </div>
  )
}

export default LocationsPage
