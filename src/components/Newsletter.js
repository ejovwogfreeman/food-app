import React from 'react'
import '../css/Newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletter-container">
        <div className="newsletter-text">
            <h2>Get notified when we update!</h2>
            <p>
                Get notified when we add new items to our specials menu, <br />
                update our pricelists or have promo!
            </p>
        </div>
        <div className="newsletter-form">
            <input type="text" placeholder='youremail@gmail.com'/>
            <button>Get notified</button>
        </div>
    </div>
  )
}

export default Newsletter