import React from 'react'
import './Home.css'
import Card from '../../Component/UI/Card/Card'
import Sidebar from '../../Component/PostCompo/SidePost/SidePost'
import RecentPost from './RecentPost/RecentPost'
import BlogData from '../../../src/data/data.json'
import Layout from '../../Component/Layout/Layout'

/**
* @author
* @function 
**/

const SideImg = (props) => {
  return(
    <div style={{height:`${props.height}px`}}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}


const GallerImg = (props) => {

  return(

    <div className="galleryPost" style={props.postStyle}>

            <section className="fullimgWrapper" style={{width:"70%"}}>
                 <div >
                   <img src={require('../../Assets/Blog_imgs/'+props.ImgAr[0])} alt="bigImg"/>
                 </div>
            </section>


            <section className="sideimgWrapper" style={{width:"30%"}}>
                  <SideImg
                   height={props.sideHeight}
                    src={require("../../Assets/Blog_imgs/"+props.ImgAr[1])} 
                    alt="smallImg"
                  />
                  <SideImg
                    height={props.sideHeight}
                    src={require("../../Assets/Blog_imgs/"+props.ImgAr[2])} 
                    alt="smallImg"
                  />
                  <SideImg
                   height={props.sideHeight}
                    src={require('../../Assets/Blog_imgs/'+props.ImgAr[3])} 
                    alt="smallImg"
                  />
            </section>

    </div>
  )
}

const home = (props) => {

  const postheight= 430;

  const postStyle ={
    height: postheight + "px",
    overflow:'hidden',
  }
  const sideHeight = postheight/3;

  const ImgArray = BlogData.data.map(post => post.blogImage)
  return(
      <div>
          <Card  style={{marginBottom:"20px"}}>
            
            <GallerImg 
            postStyle={postStyle}
            sideHeight={sideHeight}
            ImgAr={ImgArray}/>

          </Card>
           
          
          <Layout>
             <RecentPost />
          </Layout>
             
            
          
           
      </div>
    )

 }

export default home