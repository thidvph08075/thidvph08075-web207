import React,{useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

const Blog = ({ post }) => {
    let myRef = useRef();
    useEffect(() => {
        window.scrollTo(0, 0)
        
        }, [])

    return (
               
        <div className="about_section" style={{marginTop:50}}>
             <h1 style={{textAlign:"center"}}>Blog</h1>
             <br/>
               {post.map(({id,  namePost, image, desc}, index) => (
        <div className="row" key={index}>
            <div className="col-lg-6 col-md-12">
                <div className="about_thumb">
                    <img style={{width:600,height:400}} src={image} alt="" />
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="about_content">
               <h1>{namePost}</h1>
               <p>{desc}</p>
                    <div className="view__work">
                        <Link to={`detailpost/${id}`}>view work </Link>
                    </div>
                </div>
            </div>
        </div>
         ))}
    </div>
    )
       
}

Blog.propTypes = {

}

export default Blog
