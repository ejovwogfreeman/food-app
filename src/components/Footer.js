import React from 'react'
import '../css/Footer.css'
import img1 from '../assets/googleplay.png'
import img2 from '../assets/appstore.png'
import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
// import { AiOutlineTwitter } from 'react-icons/ai'
// import { AiFillYoutube } from 'react-icons/ai'

const Footer = () => {

    let year = new Date().getFullYear()

  return (
    <footer>
        <div className="main-footer">
            <div>
                <h5>Company</h5>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Career</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>
            <div>
                <h5>Support</h5>
                <ul>
                    <li><a href="">Help Center</a></li>
                    <li><a href="">Safety Center</a></li>
                </ul>
            </div>
            <div>
                <h5>Legal</h5>
                <ul>
                    <li><a href="">Cookies Policy</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Dispute resolution</a></li>
                </ul>
            </div>
            <div style={{borderBottom: '0px'}}>
                <h5>Install App</h5>
                <ul>
                    <li><a href=""><img src={img1} alt="" /></a></li>
                    <li><a href=""><img src={img2} alt="" /></a></li>
                </ul>

            </div>
        </div>
        <div className="sub-footer">
            <p>&copy; {year} LILIES, All rights reserved.</p>
            <div className='icons'>
                <a href="" className='icon'><AiOutlineInstagram/></a>
                <a href="" className='icon'><AiOutlineTwitter/></a>
                <a href="" className='icon'><AiFillYoutube/></a>               
            </div>
        </div>
    </footer>
  )
}

export default Footer