import React from 'react'

const Ucchild = ({onClick}) => {
    console.log("Child rendered!");

  return (
    <div>
      <button onClick={onClick}>Child Button</button>
    </div>
  )
}

export default React.memo(Ucchild);
