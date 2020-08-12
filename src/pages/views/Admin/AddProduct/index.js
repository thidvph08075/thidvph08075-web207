import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import firebase from '../../../../firebase'
import Category from '../Category';

const AddProduct = ({ onAdd,category }) => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
  
   
    const onSubmit = data => console.log(data);
    const [valueInput, setValueInput] = useState({});
  
    const onHandleChange = (e) => {
        const { name, value } = e.target
        setValueInput({
            ...valueInput,
            [name]: value,
          
           
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
                   
                    image: url
                }
                console.log(newData);
                // push the data out of app.js via props onAdd
                onAdd(newData)
             
            } )
        } ) ;
        history.push('/admin/products')
    }
  

    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Thêm sản phẩm</h1>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className="form-group">

                            <label htmlFor="">name</label>
                            <input type="text" name="name"  ref={register({ minLength: 5, required: true,pattern: /([^\s])/ })} className="form-control" onChange={onHandleChange} />
                            {errors.name && errors.name.type === 'required' && 
                                <p style={{ color: "red" }}>mời nhập tên sản phẩm</p>
                            }
                            {errors.name && errors.name.type === 'pattern' && 
                                <p style={{ color: "red" }}>mời nhập tên sản phẩm</p>
                            }
                            {errors.name && errors.name.type === "minLength" && <span style={{color:'red'}}>nhập ít nhất 5 ký tự</span>}
                        </div>
                        <div className="form-group">

                            <label htmlFor="">image</label>
                            <input type="file" name="image" ref={register({ required: true , pattern: /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i})} className="form-control" onChange={onHandleChange} />
                            {errors.image && errors.image.type ==='required' && 
                                <p style={{ color: "red" }}>mời chọn ảnh</p>
                            }
                              {errors.image && errors.image.type ==='pattern' && 
                                <p style={{ color: "red" }}>mời chọn đúng định dạng ảnh</p>
                            }
                        </div>
                        <div className="form-group">

                            <label htmlFor="">price</label>
                            <input type="number" name="price" ref={register({ required: true, minLength: 5,pattern: /([^\s])/  })} className="form-control" onChange={onHandleChange} />
                        {errors.price && errors.price.type ==='required' &&
                            <p style={{color:'red'}}>mời nhập giá sản phẩm</p>
                        }
                        {errors.price && errors.price.type ==='pattern' && <span>mời nhập giá sản phâm</span>}
                        {errors.price && errors.price.type === "minLength" && <span style={{color:'red'}}>nhập ít nhất 5 ký tự</span>}
                        </div>
                        <div className="form-group">

<label htmlFor="">mô tả</label>
<input type="text" name="des" ref={register({ minLength: 5, required: true })} className="form-control" onChange={onHandleChange} />
{errors.des && errors.des.type === 'required' && 
    <p style={{ color: "red" }}>mời nhập mô tả sản phẩm</p>
}
{errors.des && errors.des.type === "minLength" && <span style={{color:'red'}}>nhập ít nhất 5 ký tự</span>}
</div>
<div className="form-group">

<label htmlFor="">Trạng thái</label> <br/>

còn hàng<input type="radio" ref={register({required:true})} name="status" onChange={onHandleChange} value="còn hàng" style={{marginLeft:10}} checked/>
hết hàng<input type="radio" name="status" ref={register({required:true})} onChange={onHandleChange} style={{marginLeft:10}} value="hết hàng"/>
 
</div>
<div className="form-group">

<label htmlFor="">Danh mục</label> <br/>

<select className="form-control ml-4" name="cate" ref={register({required:true})} onChange={onHandleChange}>
<option value={0} onChange={onHandleChange}>Chọn danh mục</option>
{category.map(({id,nameCate})=>(
    <option key={id} onChange={onHandleChange}>{nameCate}</option>
))}

</select>
 {errors.cate && errors.cate.type ==='required' && <span style={{color:'red'}}>vui lòng chọn danh mục</span>}
</div>





                        <button type="submit" className="btn btn-primary">submit</button>
                    </form>

                </div>



            </div>
        </div>
    )
}

AddProduct.propTypes = {

}

export default AddProduct
