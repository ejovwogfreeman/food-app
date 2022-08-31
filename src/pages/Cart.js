import React from 'react'
import Background from './Background.js'
import "../css/Cart.css";
// import img1 from '../assets/burger1.png'
// import img2 from '../assets/pasta1.png'
// import img3 from '../assets/meat1.png' 
// import img4 from '../assets/indomie.png' 
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const Cart = ({meals, onRemove}) => {
    // const meals = [
    //     {
    //         id: 1,
    //         image: img1,
    //         title: 'Stir fry Pasta',
    //         description: 'Stir fry Pasta yada yada yada because of the season',
    //         action: 'remove',
    //         quantity: 3,
    //         price: 1000,
    //         total: 10000,
    //     },
    //     {
    //         id: 2,
    //         image: img2,
    //         title: 'Meat Balls',
    //         description: 'Meat Balls yada yada yada because of the season',
    //         action: 'remove',
    //         quantity: 3,
    //         price: 1000,
    //         total: 10000,
    //     },
    //     {
    //         id: 3,
    //         image: img3,
    //         title: 'Burger Meal',
    //         description: 'Burger Meal yada yada yada because of the season',
    //         action: 'remove',
    //         quantity: 3,
    //         price: 1000,
    //         total: 10000,
    //     },
    //     {
    //         id: 4,
    //         image: img4,
    //         title: 'Fried Indomie',
    //         description: 'Burger Meal yada yada yada because of the season',
    //         action: 'remove',
    //         quantity: 3,
    //         price: 1000,
    //         total: 10000,
    //     },
    // ]

    const totalPrice = meals.reduce((a,c)=> a + c.price * c.quantity, 0)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/checkout")
    }

  return (
    <div className='cart-container'>
        <div className="cart">        
            <Background/>
        </div>
        <div className="bg-color"></div>      
        <div className='cart-box'>
            <Link to='/dashboard'><AiOutlineArrowLeft className='go-back'/></Link>  
            <h3>Your Cart</h3>
            {meals.length > 0 ? 
                <>
                <div className="items">
                    <div className="image">
                        <strong className='t-amnt'>Item</strong>
                    </div>
                    <div className="quantity" id='end'>
                        <strong>Qty</strong>
                        <strong>Unit Price</strong>
                        <strong>Sub-total </strong>
                    </div>
                </div>
                {meals.map((meal)=> {
                    return (
                        <div key={meal.id} className="items" >
                            <div className="image">
                                <img src={meal.image} alt="" />
                                <div className="title">
                                    <h5>{meal.title}</h5>
                                    <button onClick={()=>onRemove(meal)}>{meal.remaction}</button>
                                </div>
                            </div>
                            <div className="quantity" id='end'>
                                <strong>{meal.quantity}</strong>
                                <strong>₦{meal.price}</strong>
                                <strong>₦{meal.quantity * meal.price}</strong>
                            </div>
                        </div>
                    )
                })}
                <p className="total">Total: &nbsp; <strong className='t-amnt'>₦{totalPrice.toFixed(2)}</strong> </p>
                <button className='button' onClick={handleSubmit}>Checkout</button>
                </> : "Your cart is crrently empty..." 
            }
        </div>
    </div>
  )
}

export default Cart