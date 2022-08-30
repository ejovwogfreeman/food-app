import React, { useState } from 'react'
import img from '../assets/signup.png'
import '../css/Signin.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const Signup = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [passwordType, setpasswordType] = useState("password");

  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setpasswordType("text");
      return;
    }
    setpasswordType("password");
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    sessionStorage.setItem('user', JSON.stringify(form))

    toast.success("Sign Up Successful")

    navigate('/signin')
    
  }

  return (
    <div className='signin-container' >
        <ToastContainer />
        <div className="signin-img">
          <div className='light'>
          </div>
            <img src={img} alt="" />
        </div>
        <div className="signin-text">
          <form onSubmit={handleSubmit}>
            <h1>Welcome to Lilies!</h1>
            <div className='eye-cont'>
              <input 
                type="text" 
                placeholder = "Your Full Name"
                onChange={handleChange} 
                name = 'name'
                required
              />
            </div>
            <div className='eye-cont'>
              <input 
                type="email" 
                placeholder = "Your Email address"
                onChange={handleChange}
                name = 'email'
                required
              />
            </div>
            <div className='eye-cont'>
              <input   
                className='input'
                type={passwordType}
                placeholder="Your Password" 
                onChange={handleChange}
                name="password"
                required
                />
                {passwordType === "password" ?
                  <AiFillEye className="btnShow" onClick={togglePassword}/> :
                  <AiFillEyeInvisible className="btnShow" onClick={togglePassword}/>
                }
            </div>
            <div className='eye-cont'>
              <button>SIGN UP</button>
            </div>
            <p>Already have an account? <Link to="/signin">LOGIN</Link> </p>
          </form>
         </div>
    </div>
  )
}

export default Signup