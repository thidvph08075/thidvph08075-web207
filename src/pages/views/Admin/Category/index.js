import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Category = ({category,onRemoveCate}) => {
    const removeCate =(id)=>{
        onRemoveCate(id);
    }
    return (
        <div>
            <div className="main-panel">
                <nav className="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse justify-content-end">
                            <form className="navbar-form" >
                                <div className="input-group no-border">
                                    <input type="text" className="form-control"  placeholder="Search..." name="name"  />
                                    <button type="submit" className="btn btn-white btn-round btn-just-icon">
                                        <i className="material-icons">search</i>
                                        <div className="ripple-container" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
                <div className="card shadow ml-10">
                    <h1 style={{fontSize:40,color:'black'}}>Quản lý Danh Mục</h1>
                    {/* <div className="card-header card-header-primary"></div> */}
                    <Link to="/admin/category/add"><button type="button" className="btn btn-primary" style={{ margintop: 100,marginLeft:20,marginBottom: 30 }}>Thêm</button></Link>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Name</th>
                                       
                                        
                                        <th scope="col">Action</th>
                                        {/* <th scope="col">Detail</th> */}
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    {category.map(({ id, nameCate, textAra}, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>
                                               {nameCate}
                                            </td>
                                           
                                            
                                            <td>
                                                <button className="btn btn-primary" onClick={()=>removeCate(id)}>
                                                    Delete
                                                </button>
                                                <Link className="btn btn-success" to={'/admin/editcate/'+id}>
                                                    Edit
                                                </Link>
                                            </td>
                                        </tr> 
                                     ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Category.propTypes = {

}

export default Category