import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import sectionBg4 from '../../../assets/images/banner/section-bg4.png'
import sectionBg5 from '../../../assets/images/banner/section-bg5.png'
import sectionBg6 from '../../../assets/images/banner/section-bg6.png'
import sectionBg7 from '../../../assets/images/banner/section-bg7.png'
import mediaImage from '../../../assets/images/feature/media-image.png'
import mediaImage1 from '../../../assets/images/feature/media-image1.png'

const Home4Media = () => {
    return (
        <>
            <section className="section-bg-shape1">
                <div className="sc-media-section-area p-z-idex sc-pb-140 sc-md-pb-80 sc-sm-pb-40">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <Fade bottom>
                                    <div className="sc-media-item p-z-idex sc-pr-110 sc-md-pr-0 sc-sm-pr-0">
                                        <div className="sc-heading-area sc-mb-20">
                                            <h2 className="heading-title">Engaging More, Refreshing <span className="gradiant-color">Result</span></h2>
                                        </div>
                                        <div className="description sc-mb-20">
                                            Aliquam ultrices sagittis orci a scelerisque purus. Vel elit scelerisque mauris pellentesque pulvinar. Feugiat in nec fermentum posuere urna
                                            tincidunt praesent feugiat.
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="sc-media-list">
                                                    <ul>
                                                        <li><i className="ri-checkbox-circle-fill"></i> Morbi tincidunt</li>
                                                        <li><i className="ri-checkbox-circle-fill"></i> Tortor posuere</li>
                                                        <li><i className="ri-checkbox-circle-fill"></i> Volutpat comodo</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="sc-media-list">
                                                    <ul>
                                                        <li><i className="ri-checkbox-circle-fill"></i> Better Online Exposure</li>
                                                        <li><i className="ri-checkbox-circle-fill"></i> Enhanced Customer Trust</li>
                                                        <li><i className="ri-checkbox-circle-fill"></i> Complete Brand Control</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media-btn sc-mt-50">
                                            <Link className="gradiant-btn" to="/signup#">
                                                <span>Get Started</span>
                                            </Link>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-lg-6">
                                <Fade bottom delay={250}>
                                    <div className="sc-media-images shake-y sc-md-mt-75">
                                        <img src={mediaImage} alt="Images" />
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sc-media-section-two p-z-idex sc-pb-130 sc-md-pb-40 sc-sm-pb-10">
                    <div className="container">
                        <div className="row align-items-center flex-lg-row-reverse">
                            <div className="col-lg-6">
                                <Fade bottom >
                                    <div className="sc-media-two p-z-idex sc-pl-95 sc-md-pr-0 sc-sm-pr-0">
                                        <div className="sc-heading-area sc-mb-20">
                                            <h2 className="heading-title">Best Features For Social Media
                                                <span className="gradiant-color">Marketing</span>
                                            </h2>
                                        </div>
                                        <div className="description sc-mb-15">
                                            Ligula ullamcorper malesuada proin libero nunc consequat. Sed risus pretium quam vulputate dignissim suspendisse in. Justo laoreet sit amet
                                            cursus sit. Tristique nulla aliquet.
                                        </div>
                                        <div className="description sc-mb-35">
                                            At auctor urna nunc id. Nam libero justo laoreet sit amet cursus sit. Sapien faucibus et molestie ac feugiat.
                                        </div>
                                        <div className="media-btn sc-mt-50">
                                            <Link className="gradiant-btn" to="/signup#">
                                                <span>Get Started</span>
                                            </Link>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-lg-6 ">
                                <Fade bottom delay={250}>
                                    <div className="sc-media-images shake-y p-z-idex sc-md-mt-30 sc-pr-30 sc-md-pr-0 sc-md-mb-50">
                                        <img src={mediaImage1} alt="Images" />
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sc-section-bg1">
                    <img className="bg-image-5" src={sectionBg4} alt="Bg" />
                    <img className="bg-image-6" src={sectionBg5} alt="Bg" />
                    <img className="bg-image-7" src={sectionBg6} alt="Bg" />
                    <img className="bg-image-8" src={sectionBg7} alt="Bg" />
                </div>
            </section>
        </>
    );
};

export default Home4Media;