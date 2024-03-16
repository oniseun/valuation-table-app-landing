import React from 'react';
import { Fade } from 'react-reveal';
import appsImage from '../../../assets/images/banner/apps-image.png'
import bannerShape from '../../../assets/images/banner/banner-shape.png'
import bannerShape1 from '../../../assets/images/banner/banner-shape1.png'

const Home5Banner = () => {
    return (
        <>
            <section className="sc-banner-section-area sc-banner-section-area5 sc-pt-140 sc-sm-pt-150">
                <div className="container-fluid">
                    <div className="row sc-banner-item d-flex align-items-center">
                        <div className="col-lg-6">
                            <Fade bottom delay={100}>
                                <div className="banner-header-content p-z-idex sc-mb-40" >
                                    <h1 className="banner-title p-z-idex sc-mb-25 sc-sm-mb-15">
                                        Buy & Sell Your <span className="blueColor">Bitcoin</span> Just A Click
                                    </h1>
                                    <div className="banner-sub-title sc-mb-40 sc-sm-mb-25">
                                        We make it easy to buy, sell, store, use & accept bitcoin best exchange venue & of
                                        bitcoin. Porta lorem mollis aliquam compellingly foster.
                                    </div>
                                    <div className="banner-btn-area d-flex align-items-center">
                                        <a className="sc-yellow-btn yellow-btn2 sc-mr-15" href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                                            <span> <i className="ri-apple-fill"></i> Apps Store</span>
                                        </a>
                                        <a className="sc-yellow-transparent" href="https://play.google.com/store/games" target="_blank" rel="noreferrer">
                                            <span> <i className="ri-google-play-fill"></i>Play Store</span>
                                        </a>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <div className="sc-apps-image p-z-idex">
                                <img src={appsImage} alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sc-banner-shapes">
                    <img className="sc-shape-one" src={bannerShape} alt="Banner" />
                    <img className="sc-shape-two" src={bannerShape1} alt="Banner" />
                </div>
            </section>
        </>
    );
};

export default Home5Banner;