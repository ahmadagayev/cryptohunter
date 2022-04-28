import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='header'>
      <Link to="/cryptohunter">CryptoHunter</Link>
        <ul className='navbar'>
            <li className='navbar-item'><Link to="/cryptohunter">Ana Səhifə</Link></li>
            <li className='navbar-item'><Link to="/trends">Trendlər</Link></li>
        </ul>
    </div>
  )
}

export default Navbar