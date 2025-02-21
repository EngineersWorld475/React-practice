import React from 'react'

const Button = ({handleIncrement, handleDecrement}) => {
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Button
