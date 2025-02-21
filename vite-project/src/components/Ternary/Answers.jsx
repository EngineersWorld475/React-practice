import React, { useState } from 'react'

const Answers = () => {
    const [isGoingOut, setIsGoingOut] = useState(false);

    const handleClick = () => {
        setIsGoingOut(!isGoingOut)
    }
  return (
    <div>
      <h1>Do i feel like going out tonight?</h1>
      <h2>{isGoingOut ? 'Yes' : 'No'}</h2>
      <button onClick={handleClick}>change mind</button>
    </div>
  )
}

export default Answers;
