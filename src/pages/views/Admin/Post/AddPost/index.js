import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Editor } from '@tinymce/tinymce-react';
import firebase from '../../../../../firebase'



const AddPost = ({ onAddPost }) => {
    const { register, handleSubmit, errors } = useForm();
    const [desc, setDesc] = useState("");
    let history = useHistory();
    // const [currentCategory, setCurrentCategory] = useState(categorys);
   
    
    const [valueInput, setValueInput] = useState({});
  
    const onHandleChange = (e) => {
        const { namePost, value } = e.target
        setValueInput({
            ...valueInput,
            [namePost]: value,
          
           
        });
    }
   
    const  onHandleSubmit  =  ( data )  =>  {
        console.log(data.image[0]);
        let file = data.image[0];
        // create reference containing image on firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // push the image to the above link
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Create new object containing all information from input
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    desc,
                    image: url
                }
                console.log(newData);
                // push the data out of app.js via props onAdd
                onAddPost(newData)
             
            } )
        } ) ;
        history.push('/admin/post')
    }
    const handleEditorChange = (content, editor) => {
        setDesc(content);
    }
    return (
        <div>
            <form className="w-50" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    < label  htmlFor = "productName" > Tên Bài viết </ label >
                    <input
                        type="text"
                        name="namePost"
                        className="form-control"
                    
                        aria-describedby="nameHelp"
                        ref={register}
                        onChange={onHandleChange}
                    />
                    {errors.namePost && errors.namePost.type === "required" && <span>Không để trống</span>}
                    { errors . namePost  &&  errors . namePost . type  ===  "minLength"  &&  < span > You must enter at least 5 characters </ span > }
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Ảnh mô tả</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file"
                                className="custom-file-input"
                                id="inputGroupFile02"
                                name="image"
                                ref={register}
                                onChange={onHandleChange}
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                        </div>
                    </div>
                </div>
               
                <div className="form-group">
                    < label  htmlFor = "productDescription" > Bài viết </ label >
                    <Editor
                        init={{
                            height: 500,
                            images_upload_url: 'postAcceptor.php',
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ] ,
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor |  image link\
                                alignleft aligncenter alignright alignjustify | \
                                bullist numlist outdent indent | removeformat | help',

                        } }
                        onEditorChange={handleEditorChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Thêm bài viết</button>
            </form>
        </div >
    )
}

AddPost .propTypes  =  {
    onAdd : PropTypes . func
}

export default AddPost