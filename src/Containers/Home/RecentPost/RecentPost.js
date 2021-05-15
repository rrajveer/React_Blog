import React from 'react'
import './RecentPost.css'
import Card from '../../../Component/UI/Card/Card'

/**
* @author
* @function recentPost
**/

const recentPost = (props) => {
  return(

  
    <div style={{width:"70%"}}>

     <Card style={{marginBottom:"20px"}}>

      <div style={{width:"100%", overflow:"hidden"}}>
        <img src={require("../../../Assets/Blog_imgs/fitness-blog-post.jpg")} alt="" />
      </div>
      
    
    <div className="ImgContent" style={{textAlign:"center"}}>

      <span>Category</span>
      <h1>Beautiful and Simple</h1>
      <span>This post is posted on 17th June</span>
      <p>Purus Convallis nascetur diam torquent sit id adipiscing in netus 
      praesent etiam enim nec massa fusce orci nam potenti hac tortor mont.
       </p>
       <button>READ MORE</button>
    </div>

    </Card>
  </div>
  )

 }

export default recentPost