import React from 'react'
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,

    Link,


} from "react-router-dom";


const PostManager = ({ post, onRemovePost }) => {
    const removeHandle = (id) => {
        onRemovePost(id)
    }

    return (
        <div>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Quản Lý Bài viết</h1>
            <Link to="/admin/post/add"><button type="button" className="btn btn-primary" style={{ margintop: 50, marginBottom: 30 }}>Thêm</button></Link>
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
                                    <th scope="col">Tên Bài viết</th>
                                    <th scope="col">ẢNh</th>
                                   
                                    <th scope="col">Bài viết</th>
                                   
                                    <th scope="col" >Action</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {post.map(({ id, namePost, image,desc }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{id}</th>
                                        <td>{namePost}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                       
                                        <td>{desc}</td>
                                       
                                        <td>
                                            <button className="btn btn-danger" onClick={() => removeHandle(id)}>Xóa</button>
                                        </td>
                                        <td>
                                            <Link to={`/admin/editpost/${id}`}><button type="button" className="btn btn-primary" style={{ margintop: 50, marginBottom: 30 }}>Sửa</button></Link>
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

PostManager.propTypes = {

}

export default PostManager
