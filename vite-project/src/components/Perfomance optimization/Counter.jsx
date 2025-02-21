import React from 'react'

const Counter = ({count}) => {
    console.log('counter component rendered...')

  return (
    <div>
      <h3>Count: {count}</h3>
    </div>
  )
}

export default React.memo(Counter)
