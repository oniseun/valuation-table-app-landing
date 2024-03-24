import React from 'react';
import Carousel from 'react-multi-carousel';
import testImg from '../../../assets/images/testimonials/test-img.png'
import groupImg from '../../../assets/images/testimonials/group_img.png'
import groupImg1 from '../../../assets/images/testimonials/group_img1.png'
import groupImg2 from '../../../assets/images/testimonials/group_img2.png'
import groupImg3 from '../../../assets/images/testimonials/group_img3.png'
import groupImg4 from '../../../assets/images/testimonials/group_img4.png'
import groupImg5 from '../../../assets/images/testimonials/group_img5.png'
import { HashLink as Link } from 'react-router-hash-link';

const Home6Testimonial = () => {

    const CustomRightArrow = ({ onClick }) => {
        return <button className='commonArrow arrowRight' onClick={() => onClick()}><i className="ri-arrow-right-line"></i></button>
    }

    const CustomLeftArrow = ({ onClick }) => {
        return <button className='commonArrow arrowLeft' onClick={() => onClick()}><i className="ri-arrow-left-line"></i></button>
    }

    return (
        <>
            <section className="sc-service-section-area6 sc-testimonial-style2 sc-pt-135 sc-pb-170 sc-md-pt-70 sc-md-pb-80">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="sc-heading-area text-center">
                                <h2 className="heading-title white-color">Check What’s Our Client Say <span className="yellowColor"> About Us</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="home6-testimonial-wrapper">
                        <Carousel
                            className="sc-slick-slide sc-slick-slides text-center"
                            infinite={true}
                            draggable={true}
                            arrows={true}
                            pauseOnHover={true}
                            showDots={false}
                            slidesToSlide={1}
                            swipeable={true}
                            autoPlay={true}
                            autoPlaySpeed={3000}
                            customRightArrow={<CustomRightArrow />}
                            customLeftArrow={<CustomLeftArrow />}
                            responsive={{
                                desktop: {
                                    breakpoint: {
                                        max: 3000,
                                        min: 992
                                    },
                                    items: 1,
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 991,
                                        min: 577
                                    },
                                    items: 1,
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 576,
                                        min: 1
                                    },
                                    items: 1,
                                }
                            }}
                        >
                            <div className="sc-testimonial-item">
                                <div className="quote-icon quote-icon_1">
                                    <i className="ri-double-quotes-l"></i>
                                </div>
                                <div className="description white-dark-color">
                                    Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists
                                    stay in touch with what's happening.
                                </div>
                                <div className="testimonial-image text-center">
                                    <img src={testImg} alt="TestimonialImage" />
                                </div>
                                <h5 className="test-title sc-mb-0"><Link to="#">Micky James</Link></h5>
                                <div className="digination white-color">Product Designer</div>
                            </div>
                            <div className="sc-testimonial-item">
                                <div className="quote-icon quote-icon_1">
                                    <i className="ri-double-quotes-l"></i>
                                </div>
                                <div className="description white-dark-color">
                                    Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists
                                    stay in touch with what's happening.
                                </div>
                                <div className="testimonial-image text-center">
                                    <img src={testImg} alt="TestimonialImage" />
                                </div>
                                <h5 className="test-title sc-mb-0"><Link to="#">Jenifer Anniston</Link></h5>
                                <div className="digination white-color">Product Designer</div>
                            </div>
                            <div className="sc-testimonial-item">
                                <div className="quote-icon quote-icon_1">
                                    <i className="ri-double-quotes-l"></i>
                                </div>
                                <div className="description white-dark-color">
                                    Amazing support! Totally all over my issues and we were changing it completely from being a place directory! Loving the theme on top of your task lists
                                    stay in touch with what's happening.
                                </div>
                                <div className="testimonial-image text-center">
                                    <img src={testImg} alt="TestimonialImage" />
                                </div>
                                <h5 className="test-title sc-mb-0 white-color"><Link to="#">Lara Don</Link></h5>
                                <div className="digination white-color">Product Designer</div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home6Testimonial;