import React, { useState, useEffect } from 'react';
import Routers from './routers';
import apiRequest from './api/productApi';
import Request from './api/categoryApi';
import RequestApi from './api/postApi';
function App() {

  const [products, setProducts] = useState([]);

  // Danh sách sản phẩm
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
    const getCategory = async () => {
      try {
        const { data } = await Request.getAllCate();
        setCategory(data);
      } catch (error) {
        console.log("failed to request API: ", error);
      }
    };
    getCategory();
    const getPost = async () => {
      try {
        const { data } = await RequestApi.getAllPost();
        setPost(data);
      } catch (error) {
        console.log("failed to request API: ", error);
      }
    };
    getPost();
  }, []);


  // Xóa sản phẩm
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newProducts = products.filter(product => product.id !== data.id);
      setProducts(newProducts);
    } catch (error) {
      console.log('failed to request API: ', error)
    }

  }
  // Thêm sản phẩm
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }


  // cạp nhập
  const onHandleUpdate = async (request) => {
    try {
      await apiRequest.update(request.id, request);
      const newProducts = products.map(product => (
        product.id == request.id ? request : product
      ));
      setProducts(newProducts);
    } catch (error) {
      console.log(error)
    }
  }

  // cate
  const [category, setCategory] = useState([]);
  
  //add
  const onHandleAddCate = async (cate) => {
  
    try {
      const { data } = await Request.createCate(cate)
      setCategory([...category, data]);
      console.log("Bạn thêm thành công");
    } catch (error) {
      console.log("faild to request Api", error);
    }
  };
  //delete
  const removeCate = async (id) => {
    try {
      const { data } = await Request.removeCate(id);
      const newCate = category.filter((cate) => cate.id !== id);
      setCategory(newCate);
      alert("Bạn xóa thành công");
    } catch (error) {
      console.log("faild to api", error);
    }
  }

  //update
  const onHandUpdateCate= async (request) => {
    try {
      await Request.updateCate(request.id, request);
      const newCategory = category.map(category => (
        category.id == request.id ? request : category
      ));
      setCategory(newCategory);
      alert("cập nhập thành công");
    } catch (error) {
      console.log(error)
    }
  }
 


  ///////// post
  const [post, setPost] = useState([]);
  const onHandleAddPost = async (pos) => {
  
    try {
      const { data } = await RequestApi.createPost(pos)
      setPost([...post, data]);
      console.log("Bạn thêm thành công");
    } catch (error) {
      console.log("faild to request Api", error);
    }
  };
  //delete
  const removePost = async (id) => {
    try {
      const { data } = await RequestApi.removePost(id);
      const newPost = post.filter((pos)=> pos.id !== id);
      setPost(newPost);
      alert("Bạn xóa thành công");
    } catch (error) {
      console.log("faild to api", error);
    }
  }

  //update
  const onHandUpdatePost= async (pos) => {
    try {
      await RequestApi.updatePost(pos.id, pos);
      const newPost = post.map(pos => (
      post.id == pos.id ? pos : post
      ));
      setPost(newPost);
      alert("cập nhập thành công");
    } catch (error) {
      console.log(error)
    }
  }
 


  return (
    <div className="App">
      <Routers products={products}
        onRemove={onHandleRemove}
        onAdd={onHandleAdd}
        onUpdate={onHandleUpdate}

        category={category}
        onAddCate={onHandleAddCate}
        onRemoveCate={removeCate}
        onUpdateCate={onHandUpdateCate} 
       
        post ={post}
        onAddPost={onHandleAddPost}
        onRemovePost={removePost}
        onUpdatePost={onHandUpdatePost} />
    </div>
  )

}
export default App;