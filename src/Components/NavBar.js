import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'
export default function NavBar() {
  return (
  
    <div className="Nav2">
      <li>News Hunter</li>
      <ul className="NavItem2">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/business">Business News</Link></li>
        <li><Link to="/science">Science News</Link></li>
        <li><Link to="/technology">Technology News</Link></li>
        <li><Link to="/health">Health News</Link></li>
        <li><Link to="/entertainment">Entertainment</Link></li>
        <li><Link to="/sports">Sports </Link></li>
      </ul>
    </div>
 
  )
  
}
