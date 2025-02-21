import React, { useState } from 'react'

const Unread = () => {
    const [message, setMessage] = useState(['a', 'b'])
  return (
    <div>
      <h1>{message.length > 0 ? `Your have ${message.length} unread messages` : `You are all cought up`}</h1>
    </div>
  )
}

export default Unread
