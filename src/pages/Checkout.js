import React from 'react'
import Dashboard from './Dashboard.js'
import "../css/SingleFood.css";

const Checkout = () => {
  return (
    <div className='singlefood-container'>
        <div className="food">        
            <Dashboard/>
        </div>
        <div className="bg-color"></div>      
        <div className='singlefood'>
        <form action="">
            <h3>Checkout</h3>
            <input 
              type="number" 
              placeholder = "Card Number"
            />
            <input 
              type="text" 
              placeholder = "Exp Date"
            />
            <input 
              type="text" 
              placeholder='CVV/CVV2'
            />
            <input 
              type="number" 
              placeholder='Card Pin'
            />
            <button>MAKE PAYMENT</button>
          </form>
        </div>
    </div>
  )
}

export default Checkout