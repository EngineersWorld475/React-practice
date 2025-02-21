import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
  let age = 27
  const outer = () => {
    let name = "sanjay";
    const inner = () => {
      console.log(name)
      console.log(age)
    }
    return inner;
  }

  const result = outer()
  result()
    const [count, setCount] = useState(0)
    const updateCount = (value) => {
       setCount(count+value)
    }
  return (
    <div>
      <h1>Counter: {count}</h1>
      <Child onUpdateCount={updateCount}/>
    </div>
  )
}

export default Parent
