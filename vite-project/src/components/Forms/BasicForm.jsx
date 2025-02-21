import React, { useState } from 'react';
import './basic_form.css';

const BasicForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    employment_status: '',
    skills: [],
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      username: '',
      email: '',
      password: '',
      employment_status: '',
      skills: [],
    });
  };

  return (
    <section className="outer_container">
      <form onSubmit={handleSubmit} className="form_container">
        <h1>Signup</h1>

        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Bob123"
          value={formData.username}
          onChange={handleChange}
        />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Bob123@gmail.com"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <fieldset className="radio_section">
          <legend>Employment Status</legend>
          <label>
            <input
              type="radio"
              name="employment_status"
              value="unemployed"
              onChange={handleChange}
              checked={formData.employment_status === 'unemployed'}
            />
            Unemployed
          </label>
          <label>
            <input
              type="radio"
              name="employment_status"
              value="part-time"
              onChange={handleChange}
              checked={formData.employment_status === 'part-time'}
            />
            Part-time
          </label>
          <label>
            <input
              type="radio"
              name="employment_status"
              value="full-time"
              onChange={handleChange}
              checked={formData.employment_status === 'full-time'}
            />
            Full-time
          </label>
        </fieldset>

        <fieldset className='check_section'>
          <legend>Skills You Have</legend>
          <label>
            <input
              type="checkbox"
              name="skills"
              value="javascript"
              onChange={handleChange}
              checked={formData.skills.includes('javascript')}
            />
            Javascript
          </label>
          <label>
            <input
              type="checkbox"
              name="skills"
              value="python"
              onChange={handleChange}
              checked={formData.skills.includes('python')}
            />
            Python
          </label>
          <label>
            <input
              type="checkbox"
              name="skills"
              value="php"
              onChange={handleChange}
              checked={formData.skills.includes('php')}
            />
            PHP
          </label>
          <label>
            <input
              type="checkbox"
              name="skills"
              value="java"
              onChange={handleChange}
              checked={formData.skills.includes('java')}
            />
            Java
          </label>
        </fieldset>
        <label htmlFor="gender">Select gender</label>
        <select name="gender" id='gender' onChange={handleChange}>
        <option value="">-- choose your gender --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="lesbian">Lesbian</option>
          <option value="gay">Gay</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default BasicForm;
