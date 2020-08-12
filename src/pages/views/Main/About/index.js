import React,{useRef, useEffect} from 'react'
import PropTypes from 'prop-types'

const About = props => {
    let myRef = useRef();
    useEffect(() => {
        window.scrollTo(0, 0)
        
        }, [])
    return (
        <div>
            <div className="about_page_section" ref={myRef}>
                <div className="container">
                    {/*about section area */}
                    <div className="about_section">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="about_thumb">
                                    <img src="img/about/about1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="about_content">
                                    <h1>Welcome To alista Store!</h1>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ducimus id mollitia quisquam accusamus recusandae enim dolorem vitae laborum amet molestiae, molestias alias, neque impedit, assumenda corporis. Facere esse, error? Molestias explicabo voluptate, odit excepturi molestiae pariatur facilis facere, sunt laborum earum tenetur inventore! Error voluptatum iusto quidem officia, et omnis cupiditate rem, tenetur odit explicabo adipisci totam, eius?</p>
                                    <div className="view__work">
                                        <a href="#">view work </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*about section end*/}
                    {/*counterup area */}
                    <div className="counterup_section">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single_counterup">
                                    <div className="counter_img">
                                        <img src="img/about/count.png" alt="" />
                                    </div>
                                    <div className="counter_info">
                                        <h2 className="counter_number">2170</h2>
                                        <p>happy customers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single_counterup count-two">
                                    <div className="counter_img">
                                        <img src="img/about/count2.png" alt="" />
                                    </div>
                                    <div className="counter_info">
                                        <h2 className="counter_number">8080</h2>
                                        <p>AWARDS won</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single_counterup">
                                    <div className="counter_img">
                                        <img src="img/about/count3.png" alt="" />
                                    </div>
                                    <div className="counter_info">
                                        <h2 className="counter_number">2150</h2>
                                        <p>HOURS WORKED</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single_counterup count-two">
                                    <div className="counter_img">
                                        <img src="img/about/count4.png" alt="" />
                                    </div>
                                    <div className="counter_info">
                                        <h2 className="counter_number">2170</h2>
                                        <p>COMPLETE PROJECTS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*counterup end*/}
                    {/*about progress bar */}
                    <div className="about_progressbar">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="progressbar_inner">
                                    <h2>We have Skills to show</h2>
                                    <div className="progress_skill one">
                                        <div className="progress">
                                            <div className="progress-bar about_prog wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".3s" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="progress_persent">html/css</span>
                                            </div>
                                        </div>
                                        <span className="progress_discount">60%</span>
                                    </div>
                                    <div className="progress_skill two">
                                        <div className="progress">
                                            <div className="progress-bar about_prog wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".5s" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="progress_persent">ecommerce theme </span>
                                            </div>
                                        </div>
                                        <span className="progress_discount">90%</span>
                                    </div>
                                    <div className="progress_skill three">
                                        <div className="progress">
                                            <div className="progress-bar about_prog wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".7s" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="progress_persent">Typhography </span>
                                            </div>
                                        </div>
                                        <span className="progress_discount">70%</span>
                                    </div>
                                    <div className="progress_skill four">
                                        <div className="progress">
                                            <div className="progress-bar about_prog wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".7s" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                <span className="progress_persent">Branding</span>
                                            </div>
                                        </div>
                                        <span className="progress_discount">80%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="about__img">
                                    <img src="img/about/about2.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*about progress bar end */}
                </div>
            </div>

        </div>
    )
}

About.propTypes = {

}

export default About
