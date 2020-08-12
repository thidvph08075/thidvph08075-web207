import React,{useRef, useEffect} from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Link,

} from "react-router-dom";

const Home = ({ products }) => {
  let myRef = useRef();
  useEffect(() => {
      window.scrollTo(0, 0)
      
      }, [])

  return (
    <div>
      <div className="banner_area banner_three pt-70 pb-70" ref={myRef}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section_title title_style3">
                <h3>Featured category</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single_banner">
                <div className="banner_thumb">
                  <a href="shop.html"><img src="img/bg/banner17.jpg" alt="" /></a>
                  <div className="banner_text">
                    <a href="#">Aliquam Malesuada</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single_banner">
                <div className="banner_thumb">
                  <a href="shop.html"><img src="img/bg/banner18.jpg" alt="" /></a>
                  <div className="banner_text">
                    <a href="#">Etiam eleifend</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single_banner">
                <div className="banner_thumb">
                  <a href="shop.html"><img src="img/bg/banner19.jpg" alt="" /></a>
                  <div className="banner_text">
                    <a href="#">Integer Felis</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single_banner">
                <div className="banner_thumb">
                  <a href="shop.html"><img src="img/bg/banner20.jpg" alt="" /></a>
                  <div className="banner_text">
                    <a href="#">Semper Vulputate</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="product_area product_three mb-40">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section_title title_style3">
                <h3>product</h3>
              </div>
            </div>
          </div>




          <div className="product_wrapper product_color3">
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



            </div>
          </div>

        </div>
      </section>


    </div>
  )
}

Home.propTypes = {

}

export default Home
