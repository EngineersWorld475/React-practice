import React, { useState } from 'react'
import Counter from './Counter'

const MainPageCounter = () => {
    const [countOne,  setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    const [pauseConunterOne, setPauseCounterOne] = useState(true)
    const handleIncrement = () => {
        {pauseConunterOne ? setCountOne((prev) => prev + 1) : setCountOne(countOne)}
        setCountTwo((prev) => prev + 1)
    }
    const handleOption1 = () => {
        setPauseCounterOne(false)
    }
    console.log(pauseConunterOne)
  return (
    <div>
      <Counter count={countOne}  />
      <Counter count={countTwo}  />
      <button onClick={handleIncrement}>Increment</button>
      <label htmlFor="">
      <input type="radio" name='option1' value={pauseConunterOne} onChange={handleOption1} />
        option1
      </label>
    </div>
  )
}

export default MainPageCounter
