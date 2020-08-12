import http from "./axiosHttp";

const getAllPost = () => {
    return http.get("/post");
};

const get = id => {
    return http.get(`/post/${id}`);
    
};

const createPost = data => {
    return http.post("/post", data);
};

const updatePost = (id, data) => {
    return http.put(`/post/${id}`, data);
};

const removePost = id => {
    console.log(id);
    return http.delete(`/post/${id}`);
};


export default {
    getAllPost,
    get,
    createPost,
    updatePost,
    removePost,
};