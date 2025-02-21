import React from 'react'

const Form = ({handleSubmit, handleChange, item}) => {
  return (
    <form className='chef_form' onSubmit={handleSubmit}>
      <input type="text" placeholder='e.g. oregano' value={item} onChange={handleChange}/>
      <button type='submit'>Add ingredient</button>
    </form>
  )
}

export default Form
