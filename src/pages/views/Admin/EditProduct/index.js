import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";


const EditProduct = ({ products,category, onUpdate }) => {
    let { id } = useParams();
    let history = useHistory();
    const product = products.find(product => product.id === id);
    const { register,handleSubmit, errors } = useForm();
    const [currentProduct, setCurrentProduct] = useState(product);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        onUpdate(currentProduct);
        history.push('/admin/products');
    }
    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentProduct({
            ...currentProduct,
            [name]: value
        })
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit} className="w-50">
                <div className="form-group">
                    < label htmlFor="productName" > Tên sản phẩm </ label >
                    <input type="text" ref={register({ minLength: 5, required: true, pattern: /([^\s])/ })} name="name" value={currentProduct.name} onChange={onHandleChange} className="form-control" />
                    {errors.name && errors.name.type === 'required' &&
                        <p style={{ color: "red" }}>mời nhập tên sản phẩm</p>
                    }
                    {errors.name && errors.name.type === 'pattern' &&
                        <p style={{ color: "red" }}>mời nhập tên sản phẩm</p>
                    }
                    {errors.name && errors.name.type === "minLength" && <span style={{ color: 'red' }}>nhập ít nhất 5 ký tự</span>}
                </div>
                <div className="form-group">
                    < label htmlFor="productName" > ảnh sản phẩm </ label >
                    <input type="file" name="image"  onChange={onHandleChange} className="form-control" />
                    <img src={currentProduct.image} style={{ width: 200, height: 200 }} />
                  
                </div>
                <div className="form-group">
                    < label htmlFor="productName" > Product price </ label >
                    <input type="text" name="price" ref={register({ required: true, minLength: 5, pattern: /([^\s])/ })} value={currentProduct.price} onChange={onHandleChange} className="form-control" />
                    {errors.price && errors.price.type === 'required' &&
                        <p style={{ color: 'red' }}>mời nhập giá sản phẩm</p>
                    }
                    {errors.price && errors.price.type === 'pattern' && <span>mời nhập giá sản phâm</span>}
                    {errors.price && errors.price.type === "minLength" && <span style={{ color: 'red' }}>nhập ít nhất 5 ký tự</span>}
                </div>
                <div className="form-group">
                    < label htmlFor="productName" > mô tả sản phẩm </ label >
                    <input type="text" name="des" ref={register({ minLength: 5, required: true })} value={currentProduct.des} onChange={onHandleChange} className="form-control" />
                    {errors.des && errors.des.type === 'required' &&
                        <p style={{ color: "red" }}>mời nhập mô tả sản phẩm</p>
                    }
                    {errors.des && errors.des.type === "minLength" && <span style={{ color: 'red' }}>nhập ít nhất 5 ký tự</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="">Trạng thái</label> <br />

còn hàng<input type="radio" ref={register({ required: true })} name="status" onChange={onHandleChange} value="còn hàng" style={{ marginLeft: 10 }} checked />
hết hàng<input type="radio" name="status" ref={register({ required: true })} onChange={onHandleChange} style={{ marginLeft: 10 }} value="hết hàng" />
                </div>
                <select className="form-control ml-4" name="cate" ref={register({required:true})} onChange={onHandleChange}>
<option value={0} onChange={onHandleChange}>Chọn danh mục</option>
{category.map(({id,nameCate})=>(
    <option key={id} onChange={onHandleChange}>{nameCate}</option>
))}

</select>
                <button className="btn btn-primary">Cập nhật</button>
            </form>
        </div>
    )
}

EditProduct.propTypes = {
    products: PropTypes.array
}

export default EditProduct;