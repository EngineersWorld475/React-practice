import React from 'react'
import WithHoverAnime from './WithHoverAnime'

const Title = () => {
  return (
    <div>
      <h1>Welcome to react</h1>
    </div>
  )
}

export default Title
export const TitleHoverAnime = WithHoverAnime(Title)
