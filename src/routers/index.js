import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import AddProduct from '../pages/views/Admin/AddProduct'
import Products from '../pages/views/Main/Products';
import ProductDetail from '../pages/views/Main/ProductDetail'
import EditProduct from '../pages/views/Admin/EditProduct';
import Addcate from '../pages/views/Admin/Category/Addcate';
import Category from '../pages/views/Admin/Category';
import Editcate from '../pages/views/Admin/Category/Editcate';
import AddPost from '../pages/views/Admin/Post/AddPost';
import Post from '../pages/views/Admin/Post';
import EditPost from '../pages/views/Admin/Post/EditPost';
import Blog from '../pages/views/Main/Blog';
import DetailPost from '../pages/views/Main/DetailPost';

const Routers = ({ products,category,post, onRemove, onAdd, onUpdate,onAddCate,onRemoveCate, onUpdateCate , onAddPost,onRemovePost, onUpdatePost}) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleAdd = (product) => {
        onAdd(product)
    }
    const onHandleUpdate = (id, product) => {
        onUpdate(id, product);
    }
//cate
const onHandleAddCate = (category)=>{
    onAddCate(category);
}
const removeCate =(id)=>{
    onRemoveCate(id);
}
const onHandUpdateCate = (id,cate) =>{
    onUpdateCate(id,cate);
}
//post
const onHandleAddPost = (post)=>{
    onAddPost(post);
}
const removePost =(id)=>{
    onRemovePost(id);
}
const onHandUpdatePost = (id,post) =>{
    onUpdatePost(id,post);
}


    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?/:path?/:path?/:path?/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products' render={(props) =>
                                <ProductsManager {...props} products={products} onRemove={onHandleRemove} />
                            }>
                            </Route>
                            <Route path='/admin/addproduct' render={(props)=>    <AddProduct {...props} category={category} onAdd={onHandleAdd} />}>
                            
                            </Route>
                            <Route path='/admin/editproduct/:id'render={(props)=>    <EditProduct  {...props} category={category} products={products} onUpdate={onHandleUpdate} />}>
                            
                            </Route>
                            <Route path='/admin/category' exact render={(props) =>
                              <Category  {...props} category ={category} onRemoveCate={removeCate}/>}>
                            </Route>
                            <Route path='/admin/category/add'   render={(props) =>
                                <Addcate  {...props} onAddCate={onHandleAddCate} />}>
                            </Route>
                            <Route path='/admin/editcate/:id'   render={(props) =>
                               <Editcate {...props} category={category} onUpdateCate={onHandUpdateCate}/>}>
                            </Route>
                           
                            <Route path='/admin/post' exact render={(props) =>
                              <Post  {...props} post ={post} onRemovePost={removePost}/>}>
                            </Route>
                            <Route path='/admin/post/add'   render={(props) =>
                                <AddPost  {...props} onAddPost={onHandleAddPost} />}>
                            </Route>
                            <Route path='/admin/editpost/:id'   render={(props) =>
                               <EditPost {...props} post={post} onUpdatePost={onHandUpdatePost}/>}>
                            </Route>

                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/products">
                                <Products products={products} category={category} />
                            </Route>
                            <Route path="/productdetail/:id">
                                <ProductDetail products={products} />
                            </Route>
                            <Route path="/blog">
                                <Blog post={post} />
                            </Route>
                            <Route path="/detailpost/:id">
                                <DetailPost post={post} />
                            </Route>
                            {/* <Route path="/showproduct/:id">
                                <Showproduct post={post} />
                            </Route> */}
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
