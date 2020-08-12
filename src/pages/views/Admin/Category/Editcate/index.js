import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom"


    const Editcate = ({ category, onUpdateCate }) => {
        let { id } = useParams();
        let history = useHistory();
        const categorys = category.find(categorys =>categorys.id === id);
     
        const [currentCategory, setCurrentCategory] = useState(categorys);
    
        const onHandleSubmit = (e) => {
            e.preventDefault();
            onUpdateCate(currentCategory);
            history.push('/admin/category');
        }
        const onHandleChange = e => {
            const { name, value } = e.target;
            setCurrentCategory({
                ...currentCategory,
                [name]: value
            })
        }
    return (
        <div>
            <div className="main-panel">
                <div className="card shadow ml-10">
                    <div className="card-body">
                        <div className="table-responsive">
                            <form onSubmit={onHandleSubmit}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                                                              
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input value={currentCategory.nameCate}
                                                   className="form-control" name="nameCate" type="text"
                                                    onChange={onHandleChange}
                                                />
                                            </td>

                                           
                                            <td>

                                                <button className="btn btn-primary" >Update</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Editcate.propTypes = {

}

export default Editcate