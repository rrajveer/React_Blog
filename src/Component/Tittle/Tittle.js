import React from 'react'
import Card from '../UI/Card/Card'
import './Tittle.css'
import Logo from '../Logo/Logo'
import NavBar from '../Navbar/Navbar'

/**
* @author
* @function tittle
**/

const tittle = (props) => {
  return(
     <div className="tittle"> 
      <Card>
          <div  style={{margin:'20px 0'}}>
          <Logo/>
          </div>
          <NavBar/>
   
          

      </Card>
       
         
    
    </div>
   )

 }

export default tittle