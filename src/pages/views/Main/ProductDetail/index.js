import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";

const ProductDetail = ({ products }) => {
  let myRef = useRef();
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0)
    setProduct(products.find(product => product.id === `${id}`))
  }, []);

  return (
    <div>
      <div>
        <div className="product_details mb-60" style={{ marginTop: 200 }} ref={myRef}>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product-details-tab">
                <div id="img-1" className="zoomWrapper single-zoom">
                  <a href="#">
                    <img src={product.image} data-zoom-image="img/product/productbig1.jpg" alt="big-1" />
                  </a>
                </div>
                <div className="single-zoom-thumb">

                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product_d_right">
                <form action="#">
                  <h1>{product.name}</h1>
                  <div className="product_nav">
                    <ul>
                      <li className="prev"><a href="#"><i className="fa fa-angle-left" /></a></li>
                      <li className="next"><a href="#"><i className="fa fa-angle-right" /></a></li>
                    </ul>
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

                  <div className="product_variant color">
                    <h3>Trạng thái hàng</h3>
                    <span style={{color:'red',fontSize:20,}}>{product.status}</span>

                  </div>
                  <div className="product_variant quantity">
                    <label>quantity</label>
                    <input min={0} max={100} defaultValue={1} type="number" />
                  </div>
                  <div className="action_links">
                    <ul>
                      <li className="add_to_cart"><a href="cart.html" title="add to cart"><i className="zmdi zmdi-shopping-cart-plus" /> add to cart</a></li>
                      <li className="wishlist"><a href="wishlist.html" title="Add to Wishlist"><i className="fa fa-heart-o" aria-hidden="true" /></a></li>
                      <li className="compare"><a href="#" title="compare"><i className="zmdi zmdi-swap" /></a></li>
                    </ul>
                  </div>
                  <div className="product_meta">
                    <span>Category: <a href="#">Clothing</a></span>
                  </div>
                </form>
                <div className="priduct_social">
                  <ul>
                    <li><a className="facebook" href="#" title="facebook"><i className="fa fa-facebook" /> Like</a></li>
                    <li><a className="twitter" href="#" title="twitter"><i className="fa fa-twitter" /> tweet</a></li>
                    <li><a className="pinterest" href="#" title="pinterest"><i className="fa fa-pinterest" /> save</a></li>
                    <li><a className="google-plus" href="#" title="google +"><i className="fa fa-google-plus" /> share</a></li>
                    <li><a className="linkedin" href="#" title="linkedin"><i className="fa fa-linkedin" /> linked</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*product details end*/}
        {/*product info start*/}
        <div className="product_d_info">
          <div className="row">
            <div className="col-12">
              <div className="product_d_inner">
                <div className="product_info_button">
                  <ul className="nav" role="tablist">
                    <li>
                      <a className="active" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">Description</a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#sheet" role="tab" aria-controls="sheet" aria-selected="false">Specification</a>
                    </li>
                    <li>
                      <a data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews (1)</a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="info" role="tabpanel">
                    <div className="product_info_content">
                      <p>{product.des}</p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="sheet" role="tabpanel">
                    <div className="product_d_table">
                      <form action="#">
                        <table>
                          <tbody>
                            <tr>
                              <td className="first_child">Compositions</td>
                              <td>Polyester</td>
                            </tr>
                            <tr>
                              <td className="first_child">Styles</td>
                              <td>Girly</td>
                            </tr>
                            <tr>
                              <td className="first_child">Properties</td>
                              <td>Short Dress</td>
                            </tr>
                          </tbody>
                        </table>
                      </form>
                    </div>
                    <div className="product_info_content">
                      <p>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="reviews" role="tabpanel">
                    <div className="reviews_wrapper">
                      <h2>1 review for Donec eu furniture</h2>
                      <div className="reviews_comment_box">
                        <div className="comment_thmb">
                          <img src="img/blog/comment2.jpg" alt="" />
                        </div>
                        <div className="comment_text">
                          <div className="reviews_meta">
                            <div className="star_rating">
                              <ul>
                                <li><a href="#"><i className="ion-ios-star" /></a></li>
                                <li><a href="#"><i className="ion-ios-star" /></a></li>
                                <li><a href="#"><i className="ion-ios-star" /></a></li>
                                <li><a href="#"><i className="ion-ios-star" /></a></li>
                                <li><a href="#"><i className="ion-ios-star" /></a></li>
                              </ul>
                            </div>
                            <p><strong>admin </strong>- September 12, 2018</p>
                            <span>roadthemes</span>
                          </div>
                        </div>
                      </div>
                      <div className="comment_title">
                        <h2>Add a review </h2>
                        <p>Your email address will not be published.  Required fields are marked </p>
                      </div>
                      <div className="product_ratting mb-10">
                        <h3>Your rating</h3>
                        <ul>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                          <li><a href="#"><i className="fa fa-star" /></a></li>
                        </ul>
                      </div>
                      <div className="product_review_form">
                        <form action="#">
                          <div className="row">
                            <div className="col-12">
                              <label htmlFor="review_comment">Your review </label>
                              <textarea name="comment" id="review_comment" defaultValue={""} />
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <label htmlFor="author">Name</label>
                              <input id="author" type="text" />
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <label htmlFor="email">Email </label>
                              <input id="email" type="text" />
                            </div>
                          </div>
                          <button type="submit">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

ProductDetail.propTypes = {

}

export default ProductDetail
