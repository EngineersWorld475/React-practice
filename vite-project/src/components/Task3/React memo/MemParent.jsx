import React, { useState } from 'react'
import MemChild from './MemChild'

const MemParent = () => {
    const [count, setCount] = useState(0)
    const [otherState, setOtherState] = useState(false)
  return (
    <div>
      <MemChild count={count}/>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setOtherState(!otherState)}>Toggle</button>
    </div>
  )
}

export default MemParent
