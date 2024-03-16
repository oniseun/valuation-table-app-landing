import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import crypoImage from '../../../assets/images/feature/crypo-image.png'
import appsImage2 from '../../../assets/images/feature/apps-image2.png'

const Home5Feature = () => {
    return (
        <>
            <section>
                <div className="sc-crupto-style-two sc-pt-80 sc-md-pt-20 sc-md-mb-120">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <Fade left>
                                    <div className="sc-feature-image">
                                        <img src={crypoImage} alt="crypoImage" />
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-lg-6">
                                <Fade right>
                                    <div className="sc-crupto-content-two sc-md-pr-0 sc-sm-pr-0">
                                        <div className="sc-heading-area sc-mb-20">
                                            <h2 className="heading-title sc-mb-25">
                                                Exchange Your Crypto Or Tokens In A <span className="blueColor">Minutes</span>
                                            </h2>
                                            <div className="description sc-mb-25">
                                                In cursus turpis massa tincidunt dui ut ornare. Eu consequat ac felis donec et odio
                                                pellentesque diam volutpat. Nibh praesent tristique magna sit amet purus gravida
                                                quis. Dictum non consectetur at lectus urna duis.
                                            </div>
                                        </div>
                                        <div className="crupto_check sc-mb-40">
                                            <ul>
                                                <li>
                                                    <i className="ri-checkbox-circle-fill"></i> Widget, personalize your own app with
                                                    your preference
                                                </li>
                                                <li>
                                                    <i className="ri-checkbox-circle-fill"></i> Up-to-date, we make sure that it keep
                                                    updating
                                                </li>
                                                <li>
                                                    <i className="ri-checkbox-circle-fill"></i> 500+ Exchance, cover the most popular
                                                    crypto and more
                                                </li>
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
                <div className="sc-feature-section-area6 sc-pb-100 sc-md-pb-40">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <Fade bottom>
                                    <div className="sc-feature-item">
                                        <div className="sc-heading-area sc-mb-25">
                                            <h2 className="heading-title">
                                                Tons Of Features Just In Single <span className="blueColor">App</span>
                                            </h2>
                                        </div>
                                        <p className="des sc-mb-25">
                                            Objectively network orthogonal infrastructures rather than empowered architectures.
                                            Holisticly conceptualize backend architectures without extensible intellectual capital
                                            synergistically reintermediate
                                        </p>
                                        <p className="des sc-mb-35">
                                            Mission-critical quality vectors and magnetic catalysts for change. Seamlessly
                                            revolutionize e-business infomediaries without customer directed action items.
                                            Collaboratively conceptualize team driven
                                        </p>
                                        <div className="crupto-btn">
                                            <Link className="sc-yellow-btn" to="/signup#"><span>Get Started</span></Link>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-lg-6">
                                <Fade bottom delay={250}>
                                    <div className="feature-image-area text-end">
                                        <img src={appsImage2} alt="Images" />
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

export default Home5Feature;