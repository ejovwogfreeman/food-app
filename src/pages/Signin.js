import React, { useState } from 'react'
import img from '../assets/signin.png'
import '../css/Signin.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const Signin = () => {

  const [loginData, setLoginData] = useState({
    email: '',
    password: ""
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
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

 const navigate = useNavigate()

const handleSubmit =(e) => {  

  e.preventDefault()
  let user = JSON.parse(sessionStorage.getItem('user'))

  if (loginData?.email == user?.email && loginData?.password == user?.password){
    toast.success("Login Successful")

    navigate('/dashboard')
   
  }else{
    toast.error("Wrong email or password")
  }

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
            <h1>Welcome Back!</h1>
            <div className='eye-cont'>
              <input 
                type="email" 
                placeholder = "Your Email address"
                onChange={handleChange}
                name='email'
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
              <button>LOGIN</button>
            </div>
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