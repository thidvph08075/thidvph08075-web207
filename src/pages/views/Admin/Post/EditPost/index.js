import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";


const EditPost = ({ post, onUpdatePost }) => {
    let { id } = useParams();
    let history = useHistory();
    const posts = post.find(post => post.id === id);
    const { register,handleSubmit, errors } = useForm();
    const [currentPost, setCurrentPost] = useState(posts);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        onUpdatePost(currentPost);
        history.push('/admin/post');
    }
    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentPost({
            ...currentPost,
            [name]: value
        })
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit} className="w-50">
                <div className="form-group">
                    < label htmlFor="productName" > Tên bài viết</ label >
                    <input type="text" ref={register({ minLength: 5, required: true, pattern: /([^\s])/ })} name="namePost" value={currentPost.namePost} onChange={onHandleChange} className="form-control" />
                 
                    {errors.name && errors.name.type === 'pattern' &&
                        <p style={{ color: "red" }}>mời nhập tên sản phẩm</p>
                    }
                    {errors.name && errors.name.type === "minLength" && <span style={{ color: 'red' }}>nhập ít nhất 5 ký tự</span>}
                </div>
                <div className="form-group">
                    < label htmlFor="productName" > ảnh bài viết </ label >
                    <input type="file" name="image"  onChange={onHandleChange} className="form-control" />
                    <img src={currentPost.image} style={{ width: 200, height: 200 }} />
                  
                </div>
             
                <div className="form-group">
                    < label htmlFor="productName" > bài viết</ label >
                    <input type="text" name="desc" ref={register({ minLength: 5, required: true })} value={currentPost.desc} onChange={onHandleChange} className="form-control" />
                    {errors.desc && errors.desc.type === 'required' &&
                        <p style={{ color: "red" }}>mời nhập mô tả sản phẩm</p>
                    }
                    {errors.desc && errors.desc.type === "minLength" && <span style={{ color: 'red' }}>nhập ít nhất 5 ký tự</span>}
                </div>
              
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditPost.propTypes = {
    products: PropTypes.array
}

export default EditPost;