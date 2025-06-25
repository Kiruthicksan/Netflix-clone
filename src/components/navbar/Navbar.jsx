import React from 'react'
import logo from '../../assets/logo.png'
import '../navbar/Navbar.css'



const Navbar = () => {
  return (
    <nav className='navbar navbar-expand px-5 py-4 position-absolute top-0 w-100 z-3'> 
         <div className='container d-flex justify-content-betweeen align-items-center'>
            <img src= {logo} alt="Netflix-logo" style={{width:  '200px'}} />
            <div className='d-flex align-items-center gap-3'>
                <select name="language" id="language" className='form-select' >
                    <option value="english">English</option>
                    <option value="tamil">தமிழ்</option>
                </select>
                <button className='btn btn-danger'>Sign In</button>
            </div>
         </div>
    </nav>
  )
}

export default Navbar