import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import cryptoShape from '../../../assets/images/icons/crypto-shape.png'
import cryptoShape1 from '../../../assets/images/icons/crypto-shape1.png'
import cryptoShape2 from '../../../assets/images/icons/crypto-shape2.png'
import cryptoIcon4 from '../../../assets/images/icons/crypto-icon4.png'
import cryptoIcon5 from '../../../assets/images/icons/crypto-icon5.png'
import cryptoIcon6 from '../../../assets/images/icons/crypto-icon6.png'
import cryptoIcon7 from '../../../assets/images/icons/crypto-icon7.png'

const Home6Statistic = () => {
    return (
        <>
            <section className="sc-crupto-section-area2 sc-pt-140 sc-md-pt-70 sc-pb-115 sc-md-pb-55">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-10">
                            <Fade bottom>
                                <div className="sc-crupto-content sc-pr-70 sc-md-pr-0 sc-md-mb-50">
                                    <div className="sc-heading-area sc-mb-25">
                                        <h2 className="heading-title white-color">Get Various Crypto Coins With Easy To <span className="yellowColor">Exchanges</span></h2>
                                    </div>
                                    <p className="des white-dark-color sc-mb-35">
                                        Tellus in metus vulputate eu. Maecenas accumsan lacus vel facilisis volutpat. Enim praesent elementum facilisis.
                                    </p>
                                    <div className="sc-crupto-content sc-pr-70 sc-md-pr-0 sc-md-mb-50 align-items-right">
                                    <div className="crupto-btn">
                                        <Link className="sc-yellow-btn" to="/contact#"><span>Contact Us</span></Link>
                                    </div>
                                </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home6Statistic;