import React from 'react'
import Background from './Background.js'
import "../css/SingleFood.css";
import profile from '../assets/profile.png' 
import {AiFillPlusSquare, AiFillMinusSquare} from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link, useParams } from 'react-router-dom'

const Profile = () => {

    let user = JSON.parse(sessionStorage.getItem('user'))
    let timeDay = new Date().getHours()
    let timeGreet = null;
    if(timeDay < 12) {
      timeGreet = "Good Morinng"
    }else if(timeDay < 16) {
      timeGreet = "Good Afternoon"
    }else if(timeDay < 21){
      timeGreet = "Good Evening"
    }else {
      timeGreet = "Good Night"
    }

    const { id } = useParams()

  return (
    <div className='singlefood-container'>
      <div className="food">        
          <Background/>
      </div>
      <div className="bg-color"></div>      
      <div className='singlefood'>
          <Link to='/dashboard'><AiOutlineArrowLeft className='go-back'/></Link>
          <img src={profile} alt="" />
          {user && <h3>{timeGreet}, {user?.name}!</h3>}
          <p>Hello there, I enjoy Lilies food cus i'm a foodie ;-)</p>
      </div>
    </div>
  )
}

export default Profile