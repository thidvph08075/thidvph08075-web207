import React,{useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

const Products = ({ products,category }) => {
    let myRef = useRef();
    useEffect(() => {
        window.scrollTo(0, 0)
        
        }, [])

    return (
        <div>
            <div className="col-lg-9 col-md-12" style={{ marginLeft: 150 }}  ref={myRef}>
                {/*shop wrapper start*/}
                {/*shop toolbar start*/}
                <div className="shop_title">
                    <h1 style={{ marginTop: 30, color: "red" }}>Shop</h1>
                </div>
                <div className="shop_banner">
                    <img style={{ width: 1000 }} src="img/bg/banner30.jpg" alt="" />
                </div>
                <div className="shop_toolbar_wrapper">
                    <div className="shop_toolbar_btn">
                        <button data-role="grid_3" type="button" className="active btn-grid-3" data-toggle="tooltip" title={3} />
                        <button data-role="grid_4" type="button" className=" btn-grid-4" data-toggle="tooltip" title={4} />
                        <button data-role="grid_list" type="button" className="btn-list" data-toggle="tooltip" title="List" />
                    </div>
               
                      
                        {category.map(({id,nameCate},index)=>(
                          <li className="mega_items"><Link to={"category"+id}>{nameCate}</Link></li>
                      ))}
                
                    <div className="page_amount">
                        <p>Showing 1–9 of 21 results</p>
                    </div>
                </div>
                {/*shop toolbar end*/}
                <div className="row shop_wrapper">
                    {products.map(({ id, name, image, price }, index) => (
                        
                        <div className="col-lg-4 col-md-4 col-12 " key={index}>
                            <div className="single_product">
                                <div className="product_thumb">
                                    <Link className="primary_img" to={`productdetail/${id}`}><img src={image} alt="" /></Link>

                                    <div className="label_product">
                                        <span className="label_sale">new</span>
                                    </div>
                                    <div className="action_links">
                                        <ul>
                                            <li className="add_to_cart"><a href="cart.html" title="add to cart"><i className="ion-bag" /></a></li>
                                            <li className="compare"><a href="#" title="Add to Compare"><i className="ion-ios-shuffle-strong" /></a></li>
                                            <li className="quick_view"><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick View"><i className="ion-eye" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_content grid_content">
                                    <div className="product_name">
                                        <h4><Link to={`productdetail/${id}`}>{name}</Link></h4>
                                    </div>
                                    <div className="product_rating">
                                        <ul>
                                            <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="price-container">
                                        <div className="price_box">
                                            <span className="current_price">{price}</span>

                                        </div>
                                        <div className="wishlist_btn">
                                            <a href="wishlist.html" title="wishlist"><i className="ion-android-favorite-outline" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="product_content list_content">
                                    <div className="product_name">
                                        <h4><a href="product-details.html">Hpoly and Bark Eames...</a></h4>
                                    </div>
                                    <div className="product_rating">
                                        <ul>
                                            <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                        </ul>
                                    </div>
                                    <div className="price_box">
                                        <span className="current_price">$65.00</span>
                                        <span className="old_price">$70.00</span>
                                    </div>
                                    <div className="product_desc">
                                        <p>Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikon's newly announced D3 professional digital SLR camera to offer serious photographers remarkable performance combined with agility... </p>
                                    </div>
                                    <div className="action_links">
                                        <ul>
                                            <li className="add_to_cart"><a href="cart.html" title="add to cart">Add to Cart</a></li>
                                            <li className="compare"><a href="#" title="Add to Compare"><i className="ion-ios-shuffle-strong" /></a></li>
                                            <li className="quick_view"><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick View"><i className="ion-eye" /></a></li>
                                            <li><a href="wishlist.html" title="wishlist"><i className="ion-android-favorite-outline" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>



                      

                    ))}
                    {/* {products.map((id,price,product)=>{
                        if(product.cate==id){
                            return(
                                <div className="col-lg-4 col-md-4 col-12 " >
                                <div className="single_product">
                                    <div className="product_thumb">
                                        <Link className="primary_img" to={`productdetail/${id}`}><img src={product.image} alt="" /></Link>
    
                                        <div className="label_product">
                                            <span className="label_sale">new</span>
                                        </div>
                                        <div className="action_links">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" title="add to cart"><i className="ion-bag" /></a></li>
                                                <li className="compare"><a href="#" title="Add to Compare"><i className="ion-ios-shuffle-strong" /></a></li>
                                                <li className="quick_view"><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick View"><i className="ion-eye" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="product_content grid_content">
                                        <div className="product_name">
                                            <h4><Link to={`productdetail/${id}`}>{product.name}</Link></h4>
                                        </div>
                                        <div className="product_rating">
                                            <ul>
                                                <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                                <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                                <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                                <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                                <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="price-container">
                                            <div className="price_box">
                                                <span className="current_price">{price}</span>
    
                                            </div>
                                            <div className="wishlist_btn">
                                                <a href="wishlist.html" title="wishlist"><i className="ion-android-favorite-outline" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product_content list_content">
                                        <div className="product_name">
                                            <h4><a href="product-details.html">Hpoly and Bark Eames...</a></h4>
                                        </div>
                                        <div className="product_rating">
                                            <ul>
                                                <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                                <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                                <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                                <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                                <li><a href="#"><i className="zmdi zmdi-star-outline" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="price_box">
                            <span className="current_price">{product.price}</span>
                                            
                                        </div>
                                        <div className="product_desc">
                                            <p>Engineered with pro-level features and performance, the 12.3-effective-megapixel D300 combines brand new technologies with advanced features inherited from Nikon's newly announced D3 professional digital SLR camera to offer serious photographers remarkable performance combined with agility... </p>
                                        </div>
                                        <div className="action_links">
                                            <ul>
                                                <li className="add_to_cart"><a href="cart.html" title="add to cart">Add to Cart</a></li>
                                                <li className="compare"><a href="#" title="Add to Compare"><i className="ion-ios-shuffle-strong" /></a></li>
                                                <li className="quick_view"><a href="#" data-toggle="modal" data-target="#modal_box" title="Quick View"><i className="ion-eye" /></a></li>
                                                <li><a href="wishlist.html" title="wishlist"><i className="ion-android-favorite-outline" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                            )
                        }
                    }
                    
                    )} */}



                </div>




                {/*shop toolbar end*/}
                {/*shop wrapper end*/}
            </div>

        </div>
    )
}

Products.propTypes = {

}

export default Products
