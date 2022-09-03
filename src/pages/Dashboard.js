import React from 'react'
import "../css/Dashboard.css";
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import img7 from '../assets/profile.png' 
import { BiHome } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineGift } from 'react-icons/ai'
import { HiOutlineShoppingCart } from 'react-icons/hi'

const Dashboard = ({meals, onAdd, count}) => {

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

  return (
    <div className='dashboard-container'>
      <div className="left">
        <div className='logo'>
            <Link to='/'> <img src={logo} alt=""/> <h2>Lilies</h2></Link>
        </div>
        <ul>
          <li><Link to="/dashboard"><BiHome className='icon'/>Dashboard</Link></li>
          <li><Link to="/profile"><CgProfile className='icon'/>Your Profile</Link></li>
          <li><Link to="/orders"><AiOutlineGift className='icon'/>Orders <div className='x' style={{background: '#06E775'}}>5</div></Link></li>
          <li><Link to="/cart"><HiOutlineShoppingCart className='icon'/>Your Cart <div className='x' style={{background: '#F3C294'}}>{count}</div></Link></li>
        </ul>
      </div>
      <div className="right">
      {user ?
        <div className="profile-head">
          <div className="user-name">
            <h3>{timeGreet}, {user?.name}!</h3>
            <p>What delicious meal are you craving today?</p>
          </div>
          <img src={img7} alt="" />
      </div>  : ''
      }

        <div className='meals-box'>
            {meals.map((meal)=> {
                return (
                    <div key={meal.id} className="meals">
                        <Link to={`/meal/${meal.id}`} ><img src={meal.image} alt="" /></Link>
                        <Link to={`/meal/${meal.id}`} className="h5-link"><h5>{meal.title}</h5></Link>
                        <p>{meal.description}</p>
                        <div className="price-action">
                          <strong>₦{meal.price}</strong>
                          <button onClick={()=> onAdd(meal)}>{meal.action}</button>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default Dashboard;