import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <div>
        <footer className="footer_widgets footer_three">
  <div className="container">  
    <div className="footer_top">
      <div className="row">
        <div className="col-lg-4 col-md-5">
          <div className="widgets_container contact_us">
            <a href="index.html"><img src="img/logo/logo-4.png" alt="" /></a>
            <div className="footer_contact">
              <ul>
                <li><i className="ion-ios-location" /><span>Addresss:</span> The Barn, Ullenhall, Henley in Arden B578 5CC, England</li>
                <li><i className="ion-ios-telephone" /><span>Call Us:</span>  +123.456.789 - +123.456.678</li>
                <li><i className="ion-android-mail" /><span>Email:</span>  support@plazathemes.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3">
          <div className="widgets_container widget_menu">
            <h3>Information</h3>
            <div className="footer_menu">
              <ul>
                <li><a href="about.html">About Us</a></li>
                <li><a href="#">Delivery infomation</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#"> Travel</a></li>
                <li><a href="#">Conditions</a></li>
                <li><a href="#"> Frequently Questions</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4">
          <div className="widgets_container widget_newsletter">
            <h3>Newsletter</h3>
            <div className="newsletter_desc">
              <p>Join <strong>69.000+ subscribers</strong>  &amp; get a new discount coupon every Monday.</p>					
            </div>
            <div className="newsletter_form">
              <form action="#">
                <input placeholder="Email Address" type="text" />
                <button type="submit"><i className="ion-android-mail" /></button>
              </form>
            </div>
            <div className="footer_social">
              <ul>
                <li><a href="#"><i className="ion-social-facebook" /></a></li>
                <li><a href="#"><i className="ion-social-twitter" /></a></li>
                <li><a href="#"><i className="ion-social-googleplus-outline" /></a></li>
                <li><a href="#"><i className="ion-social-linkedin" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 offset-md-3 offset-lg-0">
          <div className="widgets_container">
            <h3>instagram</h3>
            <div className="instagram_gallery">
              <div className="single_instagram">
                <a href="#"><img src="img/about/instagram1.jpg" alt="" /></a>
              </div>
              <div className="single_instagram">
                <a href="#"><img src="img/about/instagram2.jpg" alt="" /></a>
              </div>
              <div className="single_instagram">
                <a href="#"><img src="img/about/instagram3.jpg" alt="" /></a>
              </div>
              <div className="single_instagram">
                <a href="#"><img src="img/about/instagram4.jpg" alt="" /></a>
              </div>
              <div className="single_instagram">
                <a href="#"><img src="img/about/instagram5.jpg" alt="" /></a>
              </div>
              <div className="single_instagram">
                <a href="#"><img src="img/about/instagram6.jpg" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer_bottom">      
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-7">
          <div className="copyright_area">
            <p>Copyright © 2019 <a href="#"> alista </a>  All Right Reserved.</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-5">
          <div className="footer_payment text-right">
            <a><img src="img/icon/papyel.png" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>     
</footer>

        </div>
    )
}

Footer.propTypes = {

}

export default Footer
