import React, { useCallback, useState } from 'react'
import Counter from './Counter'
import Button from './Button'
import ChildComp1 from './ChildComp1'
import ChildComp2 from './ChildComp2'

const PerfomanceOpt = () => {
  const [count, setCount] = useState(0)
  const [changeOne, setChangeOne] = useState(false)
  const [changeTwo, setChangeTwo] = useState(false)

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [count])

  const handleDecrement = useCallback(() => {
    setCount((prev) => prev - 1)
  }, [count])

  const changeTextOne = useCallback(() => {
    setChangeOne(!changeOne)
  }, [changeOne])

  const changeTextTwo = useCallback(() => {
    setChangeTwo(!changeTwo)
  }, [changeTwo])

  console.log('parenet component rendered...')
  return (
    <div>
      <Counter count={count} />
      <Button handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      <ChildComp1 changeOne={changeOne} setChangeOne={changeTextOne} />
      <ChildComp2 changeTwo={changeTwo} setChangeTwo={changeTextTwo} />
    </div>
  )
}

export default PerfomanceOpt
