import React from 'react'
import Background from './Background.js'
import "../css/Cart.css";
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'

const Page404 = () => {

  return (
    <div className='cart-container'>
        <div className="cart">        
            <Background/>
        </div>
        <div className="bg-color"></div>      
        <div className='cart-box'>
            <h3>Uh Oooh ;-( Your way?...</h3>
            <Link to='/' className='lost'>click here to go back home</Link>   
        </div>
    </div>
  )
}

export default Page404