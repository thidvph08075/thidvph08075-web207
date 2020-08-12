import React from 'react'
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,

    Link,


} from "react-router-dom";


const ProductsManager = ({ products, onRemove }) => {
    const removeHandle = (id) => {
        onRemove(id)
    }

    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Quản Lý Sản Phẩm</h1>
            <Link to="/admin/addproduct"><button type="button" className="btn btn-primary" style={{ margintop: 50, marginBottom: 30 }}>Thêm</button></Link>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
              
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">des</th>
                                    <th scope="col">status</th>
                                    <th scope="col">Cate</th>
                                    <th scope="col" >Action</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(({ id, name, image, price,des,status,cate }, index) => (
                                    
                                    <tr key={index}>
                                        <th scope="row">{id}</th>
                                        <td>{name}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>{price}</td>
                                        <td>{des}</td>
                                        <td>{status}</td>
                                <td>{cate}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeHandle(id)}>Xóa</button>
                                        </td>
                                        <td>
                                            <Link to={`/admin/editproduct/${id}`}><button type="button" className="btn btn-primary" style={{ margintop: 50, marginBottom: 30 }}>Sửa</button></Link>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {

}

export default ProductsManager
