import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import cryptoIcon from '../../../assets/images/icons/crypto-icon.png'
import cryptoIcon1 from '../../../assets/images/icons/crypto-icon1.png'
import cryptoIcon2 from '../../../assets/images/icons/crypto-icon2.png'
import cryptoIcon3 from '../../../assets/images/icons/crypto-icon3.png'
import cryptoShape from '../../../assets/images/icons/crypto-shape.png'
import cryptoShape1 from '../../../assets/images/icons/crypto-shape1.png'
import cryptoShape2 from '../../../assets/images/icons/crypto-shape2.png'

const Home5Statistic = () => {
    return (
        <>
            <section className="sc-crupto-section-area sc-pt-140 sc-md-pt-70 sc-pb-115 sc-md-pb-55">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <Fade bottom>
                                <div className="sc-crupto-content sc-pr-70 sc-md-pr-0 sc-md-mb-50">
                                    <div className="sc-heading-area sc-mb-25">
                                        <h2 className="heading-title white-color">
                                            Get Various Crypto Coins With Easy To <span className="yellowColor">Exchanges</span>
                                        </h2>
                                    </div>
                                    <p className="des white-dark-color sc-mb-35">
                                        Tellus in metus vulputate eu. Maecenas accumsan lacus vel facilisis volutpat. Enim
                                        praesent elementum facilisis.
                                    </p>
                                    <div className="crupto-btn">
                                        <Link className="sc-yellow-btn" to="/signup#"><span>Get Started</span></Link>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="sc-crupto-item sc-mb-25">
                                        <div className="sc-crupto-content-box d-flex align-items-center sc-mb-20">
                                            <div className="sc-crupto-icon">
                                                <img src={cryptoIcon} alt="Images" />
                                            </div>
                                            <div className="sc-content">
                                                <h4 className="title">Eth</h4>
                                                <span>Ethereum</span>
                                            </div>
                                        </div>
                                        <div className="sc-crupto-text sc-red-color sc-mb-15">
                                            −1,777.64 (1.28%) <i className="ri-arrow-down-line"></i>
                                        </div>
                                        <img
                                            className="sc-crupto-img"
                                            src={cryptoShape}
                                            alt="Images"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="sc-crupto-item sc-crupto-item-two sc-mb-25">
                                        <div className="sc-crupto-content-box d-flex align-items-center sc-mb-20">
                                            <div className="sc-crupto-icon">
                                                <img src={cryptoIcon1} alt="Images" />
                                            </div>
                                            <div className="sc-content">
                                                <h4 className="title">Btc</h4>
                                                <span>Bitcoin</span>
                                            </div>
                                        </div>
                                        <div className="sc-crupto-text sc-blue-color">
                                            −1,777.64 (1.28%) <i className="ri-arrow-up-line"></i>
                                        </div>
                                        <img
                                            className="sc-crupto-img"
                                            src={cryptoShape1}
                                            alt="Images"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="sc-crupto-item sc-crupto-item-two sc-mb-25">
                                        <div className="sc-crupto-content-box d-flex align-items-center sc-mb-20">
                                            <div className="sc-crupto-icon">
                                                <img src={cryptoIcon2} alt="Images" />
                                            </div>
                                            <div className="sc-content">
                                                <h4 className="title">Btc</h4>
                                                <span>Dogicoin</span>
                                            </div>
                                        </div>
                                        <div className="sc-crupto-text sc-blue-color">
                                            +1,775 (1.20%) <i className="ri-arrow-up-line"></i>
                                        </div>
                                        <img
                                            className="sc-crupto-img"
                                            src={cryptoShape2}
                                            alt="Images"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="sc-crupto-item sc-crupto-item-two sc-mb-25">
                                        <div className="sc-crupto-content-box d-flex align-items-center sc-mb-20">
                                            <div className="sc-crupto-icon">
                                                <img src={cryptoIcon3} alt="Images" />
                                            </div>
                                            <div className="sc-content">
                                                <h4 className="title">Tether</h4>
                                                <span>Tether</span>
                                            </div>
                                        </div>
                                        <div className="sc-crupto-text sc-red-color sc-mb-15">
                                            +1,775 (1.20%) <i className="ri-arrow-down-line"></i>
                                        </div>
                                        <img
                                            className="sc-crupto-img"
                                            src={cryptoShape}
                                            alt="Images"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home5Statistic;