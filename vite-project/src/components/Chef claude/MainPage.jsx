import React, { useState } from 'react'
import Header from './Header'
import Form from './Form'

const MainPage = () => {
  const [item, setItem] = useState('')
  const [ingredients, setIngredients] = useState([]);

  const handleChange = (e) => {
    setItem(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIngredients([...ingredients, item])
    setItem('')
  }
  return (
    <div className='chef_main_page'>
      <Header />
      <Form handleSubmit={handleSubmit} handleChange={handleChange} item={item} />
      <h2 className='ingredients_heading'>Ingredients on hand:</h2>
      {ingredients?.map((ingredient, index) =>
        <div className='ingredients_list'>
          <ul>
            <li key={index}>
              {ingredient}
            </li>
          </ul>
        </div>
      )}
      {ingredients.length > 3 && (
        <section className='get_recipe_section'>
        <div className='get_recipe_container'>
          <h4>Ready for a recipe?</h4>
          <p>Generate a recipe from a list of ingredients</p>
        </div>
        <button>Get a recipe</button>
      </section>
      )}
    </div>
  )
}

export default MainPage
