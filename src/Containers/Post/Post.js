import React from 'react'
import BlogPost from '../../Component/PostCompo/BlogPost/BlogPost'
// import SidePost from '../../Component/PostCompo/SidePost/SidePost'
// import post from './Post.css'
import Layout from '../../Component/Layout/Layout'

/**
* @author
* @function Post
**/



const Post = (props) => {
    console.log(props)
  return(
    <Layout>
        <BlogPost {...props}/>
    </Layout>
    
   )
 }

export default Post