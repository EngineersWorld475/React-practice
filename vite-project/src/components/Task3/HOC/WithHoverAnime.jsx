import React, { useState } from 'react'

const WithHoverAnime = (WrappedComponent) => {
  return () => {
    const [isHover, setIsHover] = useState(false)

    const handleMouseEnter = () => {
        setIsHover(true)
    }

    const handleMouseLeave = () => {
        setIsHover(false)
    }
    return (<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={isHover ? {backgroundColor: 'green'} : {}}>
       return  <WrappedComponent />
    </div>)
  }
}

export default WithHoverAnime
