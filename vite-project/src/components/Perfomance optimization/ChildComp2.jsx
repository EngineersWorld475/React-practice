import React from 'react'

const ChildComp2 = ({changeTwo, setChangeTwo}) => {
    console.log('child2 component rendered...')

  return (
    <div>
      <h3>{changeTwo ? 'Have a nice day' : 'Have a great day'}</h3>
      <button onClick={setChangeTwo}>change text</button>

    </div>
  )
}

export default React.memo(ChildComp2)
