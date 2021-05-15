import React from 'react'
import './Header.css'

/**
* @author
* @function header
**/

const header = (props) => {
  return(
   <header className="Header">
       <nav className="Menu">
           <a href="#">Home</a>
           <a href="#">About-Us</a>
           <a href="#">Contact-Us</a>
       </nav>
       <div>
           social media links
       </div>
   </header>
   )

 }

export default header
