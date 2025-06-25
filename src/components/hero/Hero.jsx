import React from 'react'
import background_banner from '../../assets/background_banner.jpg'
import '../hero/Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-overlay'>
          <div className='container text-center hero-content'>
          <h1>Unlimited movies, TV shows and more</h1>
          <h2>Starts at ₹149. Cancel at any time.</h2>
          <p>Ready to watch? Enter your email to create or restart your membership</p>

          <div className='hero-form d-flex justify-content-center mt-3'>
            <input type="email" placeholder='Email address' />
            <button className='btn btn-danger'>Get Started</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero