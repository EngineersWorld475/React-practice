import React, { useState } from 'react'

const ArrayState = () => {
    const [myFavoutiteFilms, setMyFavouriteFilms] = useState([]);
    const list = ['Avengers','Interstellar','Shutter iceland', 'Godfather','Dark knight'];
    const handleClick = () => {
        setMyFavouriteFilms((prev) => [...prev, list[prev.length]]);
    }
  return (
    <div>
      <section>
        <button onClick={handleClick}>Add favourites</button>
        {myFavoutiteFilms.map((item, index) => {
            return <p key={index}>{item}</p>
        })}
      </section>
    </div>
  )
}

export default ArrayState
