import React from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import imageIcon from '../../../assets/images/icons/image-icon.png'
import imageIcon1 from '../../../assets/images/icons/image-icon1.png'
import imageIcon2 from '../../../assets/images/icons/image-icon2.png'
import imageIcon3 from '../../../assets/images/icons/image-icon3.png'
import sectionBg4 from '../../../assets/images/banner/section-bg4.png'
import sectionBg5 from '../../../assets/images/banner/section-bg5.png'

const Home4Services = () => {
    return (
        <>
            <div className="section-bg-shape1">
                <section className="sc-service-section-area8 p-z-idex sc-pt-130 sc-md-pt-70 sc-pb-140 sc-md-pb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="sc-heading-area text-center sc-mb-55 sc-md-mb-40">
                                    <h2 className="heading-title">What’s Services We
                                        <span className="gradiant-color"> Provides</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-md-6">
                                <Fade bottom delay={100}>
                                    <div className="sc-service-content-box p-z-idex text-center sc-md-mb-30">
                                        <div className="service-icon">
                                            <img src={imageIcon} alt="Images" />
                                        </div>
                                        <h4 className="sc-mb-0"><Link to="#">Social Media Strategy</Link></h4>
                                        <div className="description sc-mb-25">Pulvinar elementum integer enim neque volutpat.</div>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <Fade bottom delay={200}>
                                    <div className="sc-service-content-box p-z-idex text-center sc-md-mb-30">
                                        <div className="service-icon">
                                            <img src={imageIcon1} alt="Images" />
                                        </div>
                                        <h4 className="sc-mb-0"><Link to="#">Email Marketing</Link></h4>
                                        <div className="description sc-mb-25">Pulvinar elementum integer enim neque volutpat.</div>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <Fade bottom delay={300}>
                                    <div className="sc-service-content-box p-z-idex text-center sc-md-mb-30">
                                        <div className="service-icon">
                                            <img src={imageIcon2} alt="Images" />
                                        </div>
                                        <h4 className="sc-mb-0"><Link to="#">SEO Strategy</Link></h4>
                                        <div className="description sc-mb-25">Pulvinar elementum integer enim neque volutpat.</div>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <Fade bottom delay={400}>
                                    <div className="sc-service-content-box p-z-idex text-center sc-md-mb-30">
                                        <div className="service-icon">
                                            <img src={imageIcon3} alt="Images" />
                                        </div>
                                        <h4 className="sc-mb-0"><Link to="#">Digital Marketing</Link></h4>
                                        <div className="description sc-mb-25">Pulvinar elementum integer enim neque volutpat.</div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="sc-section-bg1">
                    <img className="bg-image5" src={sectionBg4} alt="Bg" />
                    <img className="bg-image6" src={sectionBg5} alt="Bg" />
                </div>
            </div>
        </>
    );
};

export default Home4Services;