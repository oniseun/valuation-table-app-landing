import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import clientImg from '../../../assets/images/icons/client_img.png'
import clientImg1 from '../../../assets/images/icons/client_img1.png'
import clientImg2 from '../../../assets/images/icons/client_img2.png'
import clientImg3 from '../../../assets/images/icons/client-img3.png'
import sectionBg12 from '../../../assets/images/banner/section-bg12.png'
import sectionBg13 from '../../../assets/images/banner/section-bg13.png'

const Home4Testimonial = () => {

    const CustomRightArrow = ({ onClick }) => {
        return <button className='commonArrow arrowRight' onClick={() => onClick()}><i className="ri-arrow-right-line"></i></button>;
    };

    const CustomLeftArrow = ({ onClick }) => {
        return <button className='commonArrow arrowLeft' onClick={() => onClick()}><i className="ri-arrow-left-line"></i></button>;
    };

    return (
        <>
            <section className="section-bg-shape3">
                <div className="sc-client-style-two p-z-idex sc-pb-140 sc-md-pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="sc-heading-area sc-mb-55 sc-md-mb-45">
                                    <h2 className="heading-title sc-mb-25">What Clients Say About <span className="gradiant-color">Us</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="client4-carousel-wrapper">
                            <Carousel
                                className="sc-client-area"
                                infinite={true}
                                draggable={true}
                                arrows={true}
                                pauseOnHover={true}
                                slidesToSlide={1}
                                swipeable={true}
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                customRightArrow={<CustomRightArrow />}
                                customLeftArrow={<CustomLeftArrow />}
                                responsive={{
                                    desktop: {
                                        breakpoint: {
                                            max: 3000,
                                            min: 992
                                        },
                                        items: 3,
                                    },
                                    tablet: {
                                        breakpoint: {
                                            max: 991,
                                            min: 577
                                        },
                                        items: 2,
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
                                <div className="sc-client-item p-z-idex">
                                    <div className="client_img sc-mb-25">
                                        <img src={clientImg3} alt="Client" />
                                    </div>
                                    <div className="description sc-mb-15">
                                        We've used saas for the last five years. The service was excellent. I like saas more because it makes my life a lot easier.
                                    </div>
                                    <div className="client-rating sc-mb-15">
                                        <ul>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-line"></i></li>
                                        </ul>
                                    </div>
                                    <div className="sc-client-author d-flex align-items-center">
                                        <div className="author-image sc-mr-15">
                                            <img src={clientImg} alt="Client" />
                                        </div>
                                        <div className="author-text">
                                            <h5 className="client-title sc-mb-0">Cathy Hicks</h5>
                                            <span>Product Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="sc-client-item p-z-idex">
                                    <div className="client_img sc-mb-25">
                                        <img src={clientImg3} alt="Client" />
                                    </div>
                                    <div className="description sc-mb-15">
                                        We've used saas for the last five years. The service was excellent. I like saas more because it makes my life a lot easier.
                                    </div>
                                    <div className="client-rating sc-mb-15">
                                        <ul>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-line"></i></li>
                                        </ul>
                                    </div>
                                    <div className="sc-client-author d-flex align-items-center">
                                        <div className="author-image sc-mr-15">
                                            <img src={clientImg1} alt="Client" />
                                        </div>
                                        <div className="author-text">
                                            <h5 className="client-title sc-mb-0">Dianne Russell</h5>
                                            <span>Product Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="sc-client-item p-z-idex">
                                    <div className="client_img sc-mb-25">
                                        <img src={clientImg3} alt="Client" />
                                    </div>
                                    <div className="description sc-mb-15">
                                        We've used saas for the last five years. The service was excellent. I like saas more because it makes my life a lot easier.
                                    </div>
                                    <div className="client-rating sc-mb-15">
                                        <ul>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-line"></i></li>
                                        </ul>
                                    </div>
                                    <div className="sc-client-author d-flex align-items-center">
                                        <div className="author-image sc-mr-15">
                                            <img src={clientImg2} alt="Client" />
                                        </div>
                                        <div className="author-text">
                                            <h5 className="client-title sc-mb-0">Guy Hawkins</h5>
                                            <span>Product Designer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="sc-client-item p-z-idex">
                                    <div className="client_img sc-mb-25">
                                        <img src={clientImg3} alt="Client" />
                                    </div>
                                    <div className="description sc-mb-15">
                                        We've used saas for the last five years. The service was excellent. I like saas more because it makes my life a lot easier.
                                    </div>
                                    <div className="client-rating sc-mb-15">
                                        <ul>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-fill"></i></li>
                                            <li><i className="ri-star-line"></i></li>
                                        </ul>
                                    </div>
                                    <div className="sc-client-author d-flex align-items-center">
                                        <div className="author-image sc-mr-15">
                                            <img src={clientImg1} alt="Client" />
                                        </div>
                                        <div className="author-text">
                                            <h5 className="client-title sc-mb-0">Guy Hawkins</h5>
                                            <span>Product Designer</span>
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="sc-section-bg3">
                    <img className="bg-image13" src={sectionBg12} alt="Bg" />
                    <img className="bg-image14" src={sectionBg13} alt="Bg" />
                </div>
            </section>
        </>
    );
};

export default Home4Testimonial;