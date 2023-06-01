import React, { useEffect, useState } from 'react'
import './navbar.css'
import Logo from '../images/my_unsplash_logo.svg'
import axios from 'axios'

export const Navbar = ({ onSearch, onToggleForm }) => {

    const handleSearchChange = (e) => {
        const query = e.target.value;
        onSearch(query);
      };

    return (
        <div className='navbar'>
            <div className='left'>
                <div className='logo'>
                    <img src={Logo} alt='logo'/>
                </div>
                <form className='search'>
                    
                    <input type='text' placeholder='Search' onChange={handleSearchChange}  />
                </form>
            </div>
            <div className='right'>
                <button className='button' onClick={onToggleForm}>
                    Add a photo
                </button>
            </div>
        </div>
    )
}
