import React, { useState, useEffect} from 'react'
import './BlogPost.css'
import Card from '../../UI/Card/Card'
import blogData from '../../../data/data.json'
/**
* @author
* @function BlogPost
**/



const BlogPost = (props) => {

  const[post, setPost] = useState({

    "id": 1,
            "blogCategory": "",
            "blogTitle" : "",
            "slug": "",
            "postedOn": "",
            "author": "",
            "blogImage": "",
            "blogText":""
  })
  const[slug, setSlug] = useState('')
  
  useEffect(() => {
    
    const slug = props.match.params.slug;
    const post = blogData.data.find(post => post.slug == slug)
    setPost(post)
    setSlug(slug)
  },[post,props.match.params.slug])

  console.log(props)

  if(post.blogImage == "") return null
  return(
    <div className="blogPostContainer">
    <Card >
         <div className="blogHeader">
           <span className="blogCategory">{post.blogCategory}</span>
             <h1 className="heading">{post.blogTitle}</h1>
               <p className="postBy">{post.postedOn}</p>
         </div>
         <div className="postImgContainer">
           <img src={require(`../../../Assets/Blog_imgs/${post.blogImage}`)} alt="BcgImg" />
         </div>

         <div className="postContent">
            <h3>{post.blogTitle}</h3>
            <p>{post.blogText}</p>
         </div>

    </Card>
    </div>
   )

 }

export default BlogPost