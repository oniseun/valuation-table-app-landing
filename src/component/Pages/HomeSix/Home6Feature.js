import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import crypoImage1 from '../../../assets/images/feature/crypo-image1.png'
import appsImage3 from '../../../assets/images/feature/apps-image3.png'

const Home6Feature = () => {
    return (
        <>
            <section className="sc-section-bg">
                <div className="sc-crupto-style-five sc-pt-135 sc-md-pt-75">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <Fade left>
                                    <div className="sc-feature-image shake-y sc-md-mb-45">
                                        <img src={crypoImage1} alt="crypoImage1" />
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-lg-6">
                                <Fade right>
                                    <div className="sc-crupto-content-two sc-md-pr-0 sc-sm-pr-0">
                                        <div className="sc-heading-area sc-mb-20">
                                            <h2 className="heading-title sc-mb-25 white-color">Exchange Your Crypto Or Tokens In A <span className="yellowColor">Minutes</span></h2>
                                            <div className="description sc-mb-25 white-dark-color">
                                                In cursus turpis massa tincidunt dui ut ornare. Eu consequat ac felis donec et odio pellentesque diam volutpat. Nibh praesent tristique
                                                magna sit amet purus gravida quis. Dictum non consectetur at lectus urna duis.
                                            </div>
                                        </div>
                                        <div className="crupto_check sc-mb-40">
                                            <ul>
                                                <li className="white-color"><i className="ri-checkbox-circle-fill"></i> Widget, personalize your own app with your preference</li>
                                                <li className="white-color"><i className="ri-checkbox-circle-fill"></i> Up-to-date, we make sure that it keep updating</li>
                                                <li className="white-color"><i className="ri-checkbox-circle-fill"></i> 500+ Exchance, cover the most popular crypto and more</li>
                                            </ul>
                                        </div>
                                        <div className="crupto-btn">
                                            <Link className="sc-yellow-btn" to="/signup#"><span>Get Started</span></Link>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sc-feature-section-area sc-pt-125 sc-pb-135 sc-md-pt-60 sc-md-pb-75">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <Fade bottom >
                                    <div className="sc-feature-item sc-md-mb-40">
                                        <div className="sc-heading-area sc-mb-25">
                                            <h2 className="heading-title white-color">Tons Of Features Just In Single <span className="yellowColor">App</span></h2>
                                        </div>
                                        <p className="des sc-mb-25 white-dark-color">
                                            Objectively network orthogonal infrastructures rather than empowered architectures. Holisticly conceptualize backend architectures without
                                            extensible intellectual capital synergistically reintermediate
                                        </p>
                                        <p className="des sc-mb-35 white-dark-color">
                                            Mission-critical quality vectors and magnetic catalysts for change. Seamlessly revolutionize e-business infomediaries without customer directed
                                            action items. Collaboratively conceptualize team driven
                                        </p>
                                        <div className="crupto-btn">
                                            <Link className="sc-yellow-btn" to="/signup#"><span>Get Started</span></Link>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-lg-6">
                                <Fade bottom delay={250}>
                                    <div className="feature-image-area shake-y">
                                        <img src={appsImage3} alt="Images" />
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home6Feature;