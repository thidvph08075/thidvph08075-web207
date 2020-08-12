import http from "./axiosHttp";

const getAllCate = () => {
    return http.get("/category");
};

const get = id => {
    return http.get(`/category/${id}`);
    
};

const createCate = data => {
    return http.post("/category", data);
};

const updateCate = (id, data) => {
    return http.put(`/category/${id}`, data);
};

const removeCate = id => {
    console.log(id);
    return http.delete(`/category/${id}`);
};


export default {
    getAllCate,
    get,
    createCate,
    updateCate,
    removeCate,
};