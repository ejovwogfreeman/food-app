import React from 'react'
import Dashboard from './Dashboard.js'
import "../css/SingleFood.css";
import img from '../assets/bread.png'
import {AiFillPlusSquare, AiFillMinusSquare} from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SingleFood = () => {
  return (
    <div className='singlefood-container'>
        <div className="food">        
            <Dashboard/>
        </div>
        <div className="bg-color"></div>      
        <div className='singlefood'>
            <Link to='/dashboard'><AiOutlineArrowLeft className='go-back'/></Link>
            <img src={img} alt="" />
            <h3>Baked Bread</h3>
            <p>Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.</p>
            <div className='price'>
                <p>₦2000.00</p>
                <p>10-20 Mins</p>
                <p>10pcs Avail</p>
            </div>
            <div className='action'> 
                <div className='quantity'>
                    <AiFillMinusSquare className='icon'/><p>3</p><AiFillPlusSquare className='icon'/>
                </div>
                <button>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default SingleFood