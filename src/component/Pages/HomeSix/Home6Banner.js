import React from 'react';
import appsImage from '../../../assets/images/banner/apps-image.png'
import bannerShape2 from '../../../assets/images/banner/banner-shape2.png'
import bannerShape3 from '../../../assets/images/banner/banner-shape3.png'
import bannerShape4 from '../../../assets/images/banner/banner-shape4.png'
const Home6Banner = () => {
    return (
        <>
            <section className="sc-banner-section-area6 sc-pt-125 sc-sm-pt-150">
                <div className="container-fluid p-0">
                    <div className="row sc-banner-item d-flex align-items-center">
                        <div className="col-lg-6">
                            <div className="banner-header-content sc-mb-100 sc-md-mb-45 p-z-idex" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="100">
                                <h1 className="banner-title p-z-idex sc-mb-25 sc-sm-mb-15 white-color">Buy & Sell Your <span className="yellowColor">Bitcoin</span> Just A Click</h1>
                                <div className="banner-sub-title sc-mb-40 sc-sm-mb-25 white-dark-color">
                                    We make it easy to buy, sell, store, use & accept bitcoin best exchange venue & of bitcoin. Porta lorem mollis aliquam compellingly foster.
                                </div>
                                <div className="banner-btn-area d-flex align-items-center">
                                    <a className="sc-yellow-btn sc-yellow-btm sc-mr-15" href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                                        <span><i className="ri-apple-fill"></i> Apps Sote</span>
                                    </a>
                                    <a className="sc-yellow-transparent2" href="https://play.google.com/" target="_blank" rel="noreferrer">
                                        <span><i className="ri-google-play-fill"></i> Paly Store</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sc-apps-image p-z-idex sc-pl-135">
                                <img src={appsImage} alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sc-banner-style-two">
                    <img className="sc-shape-style-one" src={bannerShape2} alt="Banner" />
                    <img className="sc-shape-style-two" src={bannerShape3} alt="Banner" />
                    <img className="sc-shape-style-three" src={bannerShape4} alt="Banner" />
                </div>
            </section>
        </>
    );
};

export default Home6Banner;