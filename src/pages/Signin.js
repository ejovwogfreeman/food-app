import React from 'react'
import img from '../assets/signin.png'
import '../css/Signin.css'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='signin-container' >
        <div className="signin-img">
          <div className='light'>
          </div>
            <img src={img} alt="" />
        </div>
        <div className="signin-text">
          <form action="">
            <h1>Welcome Back!</h1>
            <input 
              type="email" 
              placeholder = "Your Email address"
            />
            <input 
              type="password" 
              placeholder='Your Password'
            />
            <button>LOGIN</button>
            <div className="links">
              <Link to="/signup">Create an account</Link>
              <a href="">Forgot Password?</a>
            </div>
          </form>
         </div>
    </div>
  )
}

export default Signin