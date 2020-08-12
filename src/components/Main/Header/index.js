import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  //   Switch,
  //   Route,
  Link
} from "react-router-dom";
import Category from '../../../pages/views/Admin/Category';


const Header = props => {
  return (
    <div>
      <div>
        {/*header area start*/}
        <header className="header_area">
          {/*header top area start*/}
          <div className="header_top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="header_top_left">
                    <ul>
                      <li className="currency"><a href="#"> Currency <i className="ion-ios-arrow-down" /></a>
                        <ul className="dropdown_currency">
                          <li><a href="#">€ EUR – Euro</a></li>
                          <li><a href="#">€ GBP – British Pound</a></li>
                          <li><a href="#">€ INR – India Rupee</a></li>
                        </ul>
                      </li>
                      <li className="language"><a href="#"> Language <i className="ion-ios-arrow-down" /></a>
                        <ul className="dropdown_language">
                          <li><a href="#">English</a></li>
                          <li><a href="#">Germany</a></li>
                        </ul>
                      </li>
                      <li className="account"><a href="#">My Account <i className="ion-ios-arrow-down" /></a>
                        <ul className="dropdown_links">
                          <li><a href="checkout.html">Checkout </a></li>
                          <li><a href="my-account.html">My Account </a></li>
                          <li><a href="cart.html">Shopping Cart</a></li>
                          <li><a href="wishlist.html">Wishlist</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="header_top_right">
                    <div className="header_shipping">
                      <a href="#">Free Shipping on order over $99</a>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a href="#"><i className="ion-social-facebook" /></a></li>
                        <li><a href="#"><i className="ion-social-twitter" /></a></li>
                        <li><a href="#"><i className="ion-social-googleplus-outline" /></a></li>
                        <li><a href="#"><i className="ion-social-linkedin" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*header top area end */}
          {/*header middle area start*/}
          <div className="header_middle">
            <div className="container">
              <div className="row">
                <div className="col-lg-2 col-md-12">
                  <div className="logo logo_three">
                    <a href="index.html"><img src="img/logo/logo-4.png" alt="" /></a>
                  </div>
                </div>
                <div className="col-lg-10 col-md-12">
                  <div className="header_middle_right">
                    <div className="header_contact">
                      <div className="contact_static">
                        <a href="#"><i className="ion-android-call" /> Call Us: +123.456.789</a>
                        <span>MON- SAT 8:30 AM - 6:00 PM</span>
                      </div>
                      <div className="contact_static">
                        <a href="#"><i className="ion-android-mail" /> support@plazathemes.com</a>
                        <span>alista ONLINE SUPPORT 24H/7</span>
                      </div>
                    </div>
                    <div className="mini_cart_wrapper mini_cart_three">
                      <a href="javascript:void(0)"><i className="ion-bag" /> $0.00 <span>2</span></a>
                      {/*mini cart*/}
                      <div className="mini_cart">
                        <div className="cart_item">
                          <div className="cart_img">
                            <a href="#"><img src="img/s-product/product.jpg" alt="" /></a>
                          </div>
                          <div className="cart_info">
                            <a href="#">Condimentum Watches</a>
                            <span className="quantity">Qty: 1</span>
                            <span className="price_cart">$60.00</span>
                          </div>
                          <div className="cart_remove">
                            <a href="#"><i className="ion-android-close" /></a>
                          </div>
                        </div>
                        <div className="cart_item">
                          <div className="cart_img">
                            <a href="#"><img src="img/s-product/product2.jpg" alt="" /></a>
                          </div>
                          <div className="cart_info">
                            <a href="#">Officiis debitis</a>
                            <span className="quantity">Qty: 1</span>
                            <span className="price_cart">$69.00</span>
                          </div>
                          <div className="cart_remove">
                            <a href="#"><i className="ion-android-close" /></a>
                          </div>
                        </div>
                        <div className="mini_cart_table">
                          <div className="cart_total">
                            <span>Subtotal:</span>
                            <span className="price">$138.00</span>
                          </div>
                        </div>
                        <div className="mini_cart_footer">
                          <div className="cart_button">
                            <a href="cart.html">View cart</a>
                            <a href="checkout.html">Checkout</a>
                          </div>
                        </div>
                      </div>
                      {/*mini cart end*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*header middle area end*/}
          {/*header bottom start*/}
          <div className="header_bottom sticky-header">
            <div className="container">
              <div className="header_container_right container_position">
                <div className="main_menu menu_three">
                  <nav>
                    <ul>
                      <li className="active"><Link to="/"> home</Link>

                      </li>
                      <li className="mega_items"><Link to="/products"> shop</Link>


                      </li>





                      <li><Link to="/about"> about Us</Link></li>
                      <li><Link to="/blog"> blog</Link></li>
                   
                      {/* <li><a href="contact.html">  Contact Us</a></li> */}
                    </ul>
                  </nav>
                </div>
                <div className="header_block_right">
                  <ul>
                    <li className="search_bar"><a href="javascript:void(0)"><i className="ion-ios-search-strong" /></a> </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*header bottom end*/}
          </div>
        </header>
        {/*header area end*/}
        {/*search overlay*/}
        <div className="dropdown_search dropdown_search_three">
          <div className="search_close_btn">
            <i className="ion-android-close btn-close" />
          </div>
          <div className="search_container">
            <form action="#">
              <input placeholder="I’m shopping for..." type="text" />
              <button type="submit"><i className="ion-ios-search-strong" /></button>
            </form>
          </div>
        </div>
        {/*search overlay end*/}
        {/*Offcanvas menu area start*/}
        <div className="off_canvars_overlay">
        </div>
        <div className="Offcanvas_menu">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="canvas_open">
                  <span>MENU</span>
                  <a href="javascript:void(0)"><i className="ion-navicon" /></a>
                </div>
                <div className="Offcanvas_menu_wrapper">
                  <div className="canvas_close">
                    <a href="javascript:void(0)"><i className="ion-android-close" /></a>
                  </div>
                  <div className="header_top_right">
                    <div className="header_shipping">
                      <a href="#">Free Shipping on order over $99</a>
                    </div>
                    <div className="header_social">
                      <ul>
                        <li><a href="#"><i className="ion-social-facebook" /></a></li>
                        <li><a href="#"><i className="ion-social-twitter" /></a></li>
                        <li><a href="#"><i className="ion-social-googleplus-outline" /></a></li>
                        <li><a href="#"><i className="ion-social-linkedin" /></a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="header_block_right">
                    <ul>
                      <li className="search_bar"><a href="javascript:void(0)"><i className="ion-ios-search-strong" /></a>
                        <div className="dropdown_search">
                          <div className="search_close_btn">
                            <i className="ion-android-close btn-close" />
                          </div>
                          <div className="search_container">
                            <form action="#">
                              <input placeholder="I’m shopping for..." type="text" />
                              <button type="submit"><i className="ion-ios-search-strong" /></button>
                            </form>
                          </div>
                        </div>
                      </li>
                      <li className="mini_cart_wrapper"><a href="javascript:void(0)"><i className="ion-bag" /> <span>2</span></a>
                        {/*mini cart*/}
                        <div className="mini_cart">
                          <div className="cart_item">
                            <div className="cart_img">
                              <a href="#"><img src="img/s-product/product.jpg" alt="" /></a>
                            </div>
                            <div className="cart_info">
                              <a href="#">Condimentum Watches</a>
                              <span className="quantity">Qty: 1</span>
                              <span className="price_cart">$60.00</span>
                            </div>
                            <div className="cart_remove">
                              <a href="#"><i className="ion-android-close" /></a>
                            </div>
                          </div>
                          <div className="cart_item">
                            <div className="cart_img">
                              <a href="#"><img src="img/s-product/product2.jpg" alt="" /></a>
                            </div>
                            <div className="cart_info">
                              <a href="#">Officiis debitis</a>
                              <span className="quantity">Qty: 1</span>
                              <span className="price_cart">$69.00</span>
                            </div>
                            <div className="cart_remove">
                              <a href="#"><i className="ion-android-close" /></a>
                            </div>
                          </div>
                          <div className="mini_cart_table">
                            <div className="cart_total">
                              <span>Subtotal:</span>
                              <span className="price">$138.00</span>
                            </div>
                          </div>
                          <div className="mini_cart_footer">
                            <div className="cart_button">
                              <a href="cart.html">View cart</a>
                              <a href="checkout.html">Checkout</a>
                            </div>
                          </div>
                        </div>
                        {/*mini cart end*/}
                      </li>
                      <li className="setting_container"><a href="javascript:void(0)"><i className="ion-navicon" /></a>
                        <div className="setting_wrapper">
                          <div className="setting_close_btn">
                            <i className="ion-android-close btn-close" />
                          </div>
                          <div className="logo">
                            <a href="index.html"><img src="img/logo/logo-2.png" alt="" /></a>
                          </div>
                          <div className="header_description">
                            <p>We are a team of designers and developers that create high quality Magento, Prestashop, Opencart themes and provide premium and dedicated support to our products.</p>
                          </div>
                          <div className="top_links">
                            <ul>
                              <li><span>Currency</span>
                                <ul className="sub_links">
                                  <li><a href="#">EUR</a></li>
                                  <li><a href="#">GBP</a></li>
                                  <li><a className="active" href="#">USD</a></li>
                                </ul>
                              </li>
                              <li><span>Language</span>
                                <ul className="sub_links">
                                  <li><a className="active" href="#"> English</a></li>
                                  <li><a href="#"> French</a></li>
                                </ul>
                              </li>
                              <li><span>My Account</span>
                                <ul className="sub_links">
                                  <li><a href="login.html"> Register</a></li>
                                  <li><a href="login.html"> Login</a></li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="setting_social">
                            <ul>
                              <li><a href="#"><i className="ion-social-facebook" /></a></li>
                              <li><a href="#"><i className="ion-social-twitter" /></a></li>
                              <li><a href="#"><i className="ion-social-googleplus-outline" /></a></li>
                              <li><a href="#"><i className="ion-social-linkedin" /></a></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div id="menu" className="text-left ">
                    <ul className="offcanvas_main_menu">
                      <li className="menu-item-has-children active">
                        <Link to="/">Home</Link>

                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Shop</a>

                      </li>

                      <li className="menu-item-has-children">
                        <a href="#">blog</a>
                        <ul className="sub-menu">
                          <li><a href="blog.html">blog</a></li>
                          <li><a href="blog-details.html">blog details</a></li>
                          <li><a href="blog-fullwidth.html">blog fullwidth</a></li>
                          <li><a href="blog-sidebar.html">blog sidebar</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">pages </a>
                        <ul className="sub-menu">
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="services.html">services</a></li>
                          <li><a href="faq.html">Frequently Questions</a></li>
                          <li><a href="contact.html">contact</a></li>
                          <li><a href="login.html">login</a></li>
                          <li><a href="wishlist.html">Wishlist</a></li>
                          <li><a href="404.html">Error 404</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="my-account.html">my account</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="about.html">about Us</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="contact.html"> Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="Offcanvas_footer">
                    <span><a href="#"><i className="fa fa-envelope-o" /> info@yourdomain.com</a></span>
                    <ul>
                      <li className="facebook"><a href="#"><i className="fa fa-facebook" /></a></li>
                      <li className="twitter"><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li className="pinterest"><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                      <li className="google-plus"><a href="#"><i className="fa fa-google-plus" /></a></li>
                      <li className="linkedin"><a href="#"><i className="fa fa-linkedin" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Offcanvas menu area end*/}
      </div>

    </div>
  )
}

Header.propTypes = {

}

export default Header
