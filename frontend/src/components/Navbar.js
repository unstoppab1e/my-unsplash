import React from 'react'
import './navbar.css'
import Logo from '../images/my_unsplash_logo.svg'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left'>
            <div className='logo'>
                <img src={Logo} alt='logo'/>
            </div>
            <form className='search'>
                
                <input type='text' placeholder='Search' />
            </form>
        </div>
        <div className='right'>
            <button className='button'>
                Add a photo
            </button>
        </div>
    </div>
  )
}
