import React from 'react'

const Child = ({onUpdateCount}) => {
  return (
    <div>
      <button onClick={() => onUpdateCount(1) }>Increment</button>
      <button onClick={() => onUpdateCount(-1)}>Decrement</button>
    </div>
  )
}

export default Child
