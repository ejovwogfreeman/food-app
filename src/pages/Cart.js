import React from 'react'
import Dashboard from './Dashboard.js'
import "../css/Cart.css";
import img1 from '../assets/burger1.png'
import img2 from '../assets/pasta1.png'
import img3 from '../assets/meat1.png' 
import img4 from '../assets/indomie.png' 

const Cart = () => {
    const meals = [
        {
            id: 1,
            image: img1,
            title: 'Stir fry Pasta',
            description: 'Stir fry Pasta yada yada yada because of the season',
            action: 'remove',
            quantity: 3,
            price: 1000,
            total: 10000,
        },
        {
            id: 2,
            image: img2,
            title: 'Meat Balls',
            description: 'Meat Balls yada yada yada because of the season',
            action: 'remove',
            quantity: 3,
            price: 1000,
            total: 10000,
        },
        {
            id: 3,
            image: img3,
            title: 'Burger Meal',
            description: 'Burger Meal yada yada yada because of the season',
            action: 'remove',
            quantity: 3,
            price: 1000,
            total: 10000,
        },
        {
            id: 4,
            image: img4,
            title: 'Fried Indomie',
            description: 'Burger Meal yada yada yada because of the season',
            action: 'remove',
            quantity: 3,
            price: 1000,
            total: 10000,
        },
    ]


  return (
    <div className='cart-container'>
        <div className="cart">        
            <Dashboard/>
        </div>
        <div className="bg-color"></div>      
        <div className='cart-box'>
            <h3>Your Cart</h3>
            <div className="items">
                <div className="image">
                    <strong>Item</strong>
                </div>
                <div className="quantity">
                    <strong>Qty</strong>
                    <strong>Unit Price</strong>
                    <strong>Sub-total </strong>
                </div>
            </div>
           {meals.map((meal)=> {
                return (
                    <div key={meal.id} className="items">
                        <div className="image">
                            <img src={meal.image} alt="" />
                            <div className="title">
                                <h5>{meal.title}</h5>
                                <button>{meal.action}</button>
                            </div>
                        </div>
                        <div className="quantity">
                            <strong>{meal.quantity}</strong>
                            <strong>₦{meal.price}</strong>
                            <strong>₦{meal.total}</strong>
                        </div>
                    </div>
                )
            })}
            <p>Total:  <strong>₦30,000.00</strong> </p>
            <button className='button'>Checkout</button>
        </div>
    </div>
  )
}

export default Cart