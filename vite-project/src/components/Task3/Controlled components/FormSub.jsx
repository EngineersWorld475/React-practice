import React, { useState } from 'react'

const FormSub = () => {
    const [formData, setFormData] = useState({username:'', email:'', password: ''})
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);

    }
  return (
    <div>
      <label htmlFor="">Username: </label>
      <input type="text" 
        name="username"
        placeholder='enter the username'
        value={FormData.username}
        onChange={handleChange}
        handleSubmit={onsubmit}
      /> <br /><br />
      <label htmlFor="">email: </label>
      <input type="text" 
       name="email"
       placeholder='enter the email'
       value={FormData.email}
       onChange={handleChange}
       handleSubmit={onsubmit}
      /><br /><br />
      <label htmlFor="">password: </label>
      <input type="password" 
       name="password"
       placeholder='enter the password'
       value={FormData.password}
       onChange={handleChange}
       handleSubmit={onsubmit}
      /><br /><br /><br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default FormSub
