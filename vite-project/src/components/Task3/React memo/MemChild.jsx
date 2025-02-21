import React from 'react'

const MemChild = ({count}) => {
    console.log('rendered child memo component')
  return (
    <div>
      <h3>Count: {count}</h3>
    </div>
  )
}

export default React.memo(MemChild)
    