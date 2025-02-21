import React, { useCallback } from 'react'
import Ucchild from './Ucchild';

const Ucparent = () => {
    const [count, setCount] = React.useState(0);
    const handleClick = useCallback(() => {
        console.log("Clicked!");
      },[])
      
    // const handleClick = () => {
    //     console.log("Clicked!");
    //   }

      console.log("Parent rendered!");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Ucchild onClick={handleClick} />
    </div>
  )
}

export default Ucparent
