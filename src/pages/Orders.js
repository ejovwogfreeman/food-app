import React from 'react'
import Background from './Background.js'
import "../css/Cart.css";
// import img1 from '../assets/burger1.png'
// import img2 from '../assets/pasta1.png'
// import img3 from '../assets/meat1.png' 
// import img4 from '../assets/indomie.png' 
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Cart = ({meals}) => {
    // const meals = [
    //     {
    //         id: 1,
    //         image: img1,
    //         title: 'Stir fry Pasta',
    //         description: 'Stir fry Pasta yada yada yada because of the season',
    //         action: 'remove',
    //         quantity: 3,
    //         price: 1000,
    //         status: 'Delivered',
    //     },
    //     {
    //         id: 2,
    //         image: img2,
    //         title: 'Meat Balls',
    //         description: 'Meat Balls yada yada yada because of the season',
    //         action: 'remove',
    //         quantity: 3,
    //         price: 1000,
    //         status: 'Delivered',
    //     },
    //     {
    //         id: 3,
    //         image: img3,
    //         title: 'Burger Meal',
    //         description: 'Burger Meal yada yada yada because of the season',
    //         action: 'remove',
    //         quantity: 3,
    //         price: 1000,
    //         status: 'Cooking',
    //     },
    //     {
    //         id: 4,
    //         image: img4,
    //         title: 'Fried Indomie',
    //         description: 'Burger Meal yada yada yada because of the season',
    //         action: 'remove',
    //         quantity: 3,
    //         price: 1000,
    //         status: 'Cooking',
    //     },
    // ]


  return (
    <div className='cart-container'>
        <div className="cart">        
            <Background/>
        </div>
        <div className="bg-color"></div>      
        <div className='cart-box'>
            <Link to='/dashboard'><AiOutlineArrowLeft className='go-back'/></Link>
            <h3>Your Orders</h3>
            <div className="items">
                <div className="image">
                    <strong className='t-amnt'>Item</strong>
                </div>
                <div className="quantity" id='end'>
                    <strong>Qty</strong>
                    <strong>Sub-total</strong>
                    <strong>Status </strong>
                </div>
            </div>
           {meals.map((meal)=> {
                return (
                    <div key={meal.id} className="items">
                        <div className="image">
                            <img src={meal.image} alt="" />
                            <div className="title">
                                <h5>{meal.title}</h5>
                                <button>{meal.remaction}</button>
                            </div>
                        </div>
                        <div className="quantity" id='end'>
                            <strong>{meal.quantity}</strong>
                            <strong>₦{meal.quantity * meal.price}</strong>
                            <strong className={meal.status === "Delivered"? "delivered" : "cooking" }>{meal.status}</strong>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Cart