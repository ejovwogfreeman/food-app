import React from 'react'
import Background from './Background.js'
import "../css/SingleFood.css";
// import img from '../assets/bread.png'
import {AiFillPlusSquare, AiFillMinusSquare} from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'

const SingleFood = ({meal, onAdd, onRemove, quantity}) => {

    const { id } = useParams()

  return (
    <div className='singlefood-container'>
        <>
        {meal.id == id ?  
            <>
            <div className="food">        
                <Background/>
            </div>
            <div className="bg-color"></div>      
            <div className='singlefood'>
                <Link to='/dashboard'><AiOutlineArrowLeft className='go-back'/></Link>
                <img src={meal.image} alt="" />
                <h3>{meal.title}</h3>
                <p>{meal.description}</p>
                <div className='price'>
                    <p>₦{meal.price}</p>
                    <p>10-20 Mins</p>
                    <p>10pcs Avail</p>
                </div>
                <div className='action'> 
                    <div className='quantity'>
                        {quantity.map((x)=> {
                            if(x.id == id){
                                return (
                                    <>
                                        {x.quantity ? <><AiFillMinusSquare className='icon' onClick={()=>onRemove(meal)}/><p>{x.quantity}</p><AiFillPlusSquare className='icon' onClick={()=>onAdd(meal)}/></> : " "} 
                                    </>
                                )
                            }
                        })}
                    </div>
                    <button onClick={()=> onAdd(meal)}>Add to cart</button>
                </div>
            </div> </> : " "
        }
        </>
    </div>
  )
}

export default SingleFood