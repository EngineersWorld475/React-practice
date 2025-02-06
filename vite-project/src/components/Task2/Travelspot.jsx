import React from 'react'

const Travelspot = ({location_name, country, date, image, description}) => {
  return (
    <div className='travelpage_container'>
        <div className='travel_place_img_container'>
            <img src={image} alt="img_1" />
        </div>
        <div className='content_container'>
            <div className='location_details'>
            <img src="https://media.istockphoto.com/id/1148705812/vector/location-icon-vector-pin-sign-isolated-on-white-background-navigation-map-gps-direction.jpg?s=612x612&w=0&k=20&c=lqEIzW3QedZfytsX30NoBJbHxZZbWnlLsvEiwOSbaow=" alt="location_icon" width={15} height={15} />
            <p>{country}</p>
            <a href="https://www.google.com/maps/place/Kuttanad/@9.3514879,76.3746987,13z/data=!3m1!4b1!4m6!3m5!1s0x3b089e66ccc28dc3:0x33c7d68645103605!8m2!3d9.3527659!4d76.4042404!16zL20vMDY2Zzhn?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D">View on Google Maps</a>
            </div>
            <div className='location_content'>
                <h1>{location_name}</h1>
                <p className='duration'>{date}</p>
                <p className='details'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Travelspot
