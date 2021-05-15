import React, {useEffect, useState}from 'react'
import Card from '../../UI/Card/Card'
import './SidePost.css'
import blogData from '../../../data/data.json'
import { NavLink } from 'react-router-dom'

/**
* @author
* @function SidePost
**/

const SidePost = (props) => {

    const [posts,setPosts] = useState([])
   

    useEffect(() =>{
        const posts = blogData.data
        setPosts(posts)
    },[posts])
  return(
      <div className="sidebarContainer" >
    <Card style={{marginBottom:"20px", padding: "20px",boxSizing: "border-box"}}>
        <span>
       About-Us
       </span>
       <div className="sidebarImg">
           <img src={require('../../../Assets/Blog_imgs/SideBlog1.jpg')}alt="SideBlog-Img"/>
       </div>
       
       <div className="sideblogPara">
       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </div>

    </Card>

    <Card style={{marginBottom:"20px",padding: "20px",boxSizing: "border-box"}}>
    
     <span>
         Social Network
     </span>
     <div className="socialNetworkImg">
         <div>
         <img src={require('../../../Assets/icons/facebook.png')}alt="facebbok"/>
         <img src={require('../../../Assets/icons/Insta.png')}alt="insta" style={{width:"25px"}}/>
         <img src={require('../../../Assets/icons/twitter.png')}alt="twitter"/>
         <img src={require('../../../Assets/icons/watsapp.jpg')}alt="Watsapp" style={{width:"25px"}}/>
         </div>
     </div>

    
    </Card>

    <Card style={{marginBottom:"20px",padding: "20px",boxSizing: "border-box"}}>
     <span>
         Recent Post
     </span>
     <div className="recentPost">
        
     {
        posts.map(post=>{
            return(
                <NavLink
                 to={`/post/${post.slug}`}
                 key={post.id}>
        <div className="recentPost">
            <h3>{post.blogTitle}</h3>
             <p>{post.postedOn}</p> 
        </div>
        </NavLink>
            );
        
        })
      }
      </div>

         {/* <h3>Post Tittle</h3>
         <p>13th June</p> 
   

     <div className="recentPost">
         <h3>Post Tittle</h3>
         <p>13th June</p> 
     </div>

     <div className="recentPost">
         <h3>Post Tittle</h3>
         <p>13th June</p> 
     </div> */}

    
    </Card>

    </div>
       
    
   )

 }

export default SidePost