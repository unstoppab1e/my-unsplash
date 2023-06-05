import React from 'react'
import './bottom.css'

export const Bottom = () => {
  return (
    <div className='bottom'>
        © {new Date().getFullYear()} by <a className='github' href='https://github.com/unstoppab1e'>unstoppab1e</a>
    </div>
  )
}
