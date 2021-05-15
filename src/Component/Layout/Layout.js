import React from 'react'
import './Layout.css'
import SidePost from '../PostCompo/SidePost/SidePost'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <React.Fragment>
        <div className="SidePost">
        {props.children}
        <SidePost/>
        </div>
        </React.Fragment>

   )

 }

export default Layout