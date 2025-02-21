import React from 'react'

const ChildComp1 = ({changeOne, setChangeOne}) => {
    console.log('child1 component rendered...')

  return (
    <div>
      <h3>{changeOne ? 'Good morning' : 'Good night'}</h3>
      <button onClick={setChangeOne}>change text</button>
    </div>
  )
}

export default React.memo(ChildComp1)