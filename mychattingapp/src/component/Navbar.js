import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>Bukason Chatt Websites</h1>
      <Link to='/'>Home</Link>
      <Link
        to='/post'
        style={{
          color: 'white',
          backgroundColor: '#f1356d',
          borderRadius: '8px',
        }}
      >
        New Chatt
      </Link>
    </nav>
  )
}

export default Navbar
