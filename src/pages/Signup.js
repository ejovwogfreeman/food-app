import React from 'react'
import img from '../assets/signup.png'
import '../css/Signin.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='signin-container' >
        <div className="signin-img">
          <div className='light'>
          </div>
            <img src={img} alt="" />
        </div>
        <div className="signin-text">
          <form action="">
            <h1>Welcome to Lilies!</h1>
            <input 
              type="email" 
              placeholder = "Your First Name"
            />
            <input 
              type="email" 
              placeholder = "Your Email address"
            />
            <input 
              type="password" 
              placeholder='Your Password'
            />
            <button>SIGN UP</button>
            <p>Already have an account? <Link to="/signin">LOGIN</Link> </p>
          </form>
         </div>
    </div>
  )
}

export default Signup