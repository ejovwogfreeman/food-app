import React from 'react'
import img1 from '../assets/pasta.png'
import img2 from '../assets/meat.png'
import img3 from '../assets/burger.png'  
import '../css/Meals.css'

const Meals = () => {
     const meals = [
        {
            id: 1,
            image: img1,
            title: 'Stir fry Pasta',
            description: 'Stir fry Pasta yada yada yada because of the season'
        },
        {
            id: 2,
            image: img2,
            title: 'Meat Balls',
            description: 'Meat Balls yada yada yada because of the season'
        },
        {
            id: 3,
            image: img3,
            title: 'Burger Meal',
            description: 'Burger Meal yada yada yada because of the season'
        },
     ]

  return (
    <div className='meals-container'>
        <h2>Special Meals of the day!</h2>
        <p className='p'>
            Check our special meals of the day and get discounts on all our meals <br />
            and swift delivery to every location in within Ilorin.
        </p>
        <div className='meals-box'>
            {meals.map((meal)=> {
                return (
                    <div key={meal.id} className="meals">
                        <img src={meal.image} alt="" />
                        <h3>{meal.title}</h3>
                        <p>{meal.description}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Meals