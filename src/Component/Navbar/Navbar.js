import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

/**
* @author
* @function navBar
**/


class Navbar extends Component{
// const navBar = (props) => {
    
    
    state ={
        search:false
    }

    searchActive = () =>{
        this.setState({
            search:true}
            )
    };

     searchMethod = (event) =>{
         event.preventDefault()
        alert("Searched")
    }
    
    render(){
        const searchInput= (this.state.search) ? 'searchInput active': 'searchInput'
  return(
    <div className="navBar">
        <ul className="navBarMenu">
           <li><NavLink to="/">Home</NavLink></li>
           <li><NavLink to="/contact-us">Contact-Us</NavLink></li>
           <li><NavLink to="/post">Post</NavLink></li>
        </ul>
        <div className="search">
            <form onSubmit={this.searchMethod}>
            <input type="text" className={searchInput} placeholder="Search"/>
            <img onClick = {this.searchActive} className="searchIcon" src={require('../../Assets/icons/search-bar.png')} alt="search"/>
            </form>
        </div>
    </div>
   )
  }

 }


export default Navbar