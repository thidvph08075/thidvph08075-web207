import React,{useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

const DetailPost = ({ post }) => {
    let myRef = useRef();
    useEffect(() => {
        window.scrollTo(0, 0)
        
        }, [])

    return (
     
        <div className="about_section" style={{marginTop:100}}>
             
        <div className="row" >
            <div className="col-lg-6 col-md-12">
                <div className="about_thumb">
                    <img style={{width:600,height:400}} src={post.image} alt="" />
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="about_content">
               <h1>{post.namePost}</h1>
               <p>{post.desc}</p>
                  
                </div>
            </div>
        </div>
        
    </div>
    )
       
}

DetailPost.propTypes = {

}

export default DetailPost;
