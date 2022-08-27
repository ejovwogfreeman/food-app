import React from 'react'
import "../css/Dashboard.css";
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className="left">
        <div className='logo'>
            <Link to='/'> <img src={logo} alt="" width="50px"/> <h2>Lilies</h2></Link>
        </div>
        <ul>
          <li><a href="">Dashboard</a></li>
          <li><a href="">Your Profile</a></li>
          <li><a href="">Orders</a></li>
          <li><a href="">Your Cart</a></li>
        </ul>
      </div>
      <div className="right">
        coming from right
      </div>
    </div>
  )
}

export default Dashboard