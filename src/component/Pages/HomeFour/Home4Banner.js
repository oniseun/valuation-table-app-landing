import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import ModalVideo from 'react-modal-video';
import { HashLink as Link } from 'react-router-hash-link';
import banner12 from '../../../assets/images/banner/banner-12.png'
import perspective from '../../../assets/images/icons/perspective.png'
import bannerShape from '../../../assets/images/icons/banner_shape.png'
import sectionBg from '../../../assets/images/banner/section-bg.png'
import sectionBg1 from '../../../assets/images/banner/section-bg1.png'
import sectionBg2 from '../../../assets/images/banner/section-bg2.png'
import sectionBg3 from '../../../assets/images/banner/section-bg3.png'

const Home4Banner = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <section className="section-bg-shape">
                <div className="sc-banner-section-area7 p-z-idex sc-pt-160 sc-pb-90 sc-md-pb-80">
                    <div className="container-fluid">
                        <div className="row sc-banner-item d-flex align-items-center">
                            <div className="col-lg-6">
                                <div className="banner_image shake-y sc-pl-95">
                                    <img src={banner12} alt="Images" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner-header-content ">
                                    <Fade bottom delay={100} duration={1000}>
                                        <div className="sc-baaner-title sc-mb-25">
                                            <h1 className="banner-title sc-mb-0 p-z-idex">
                                                Advanced Social Media <span className="gradiant-color">Analytics</span>
                                                <img src={perspective} alt="Icon" />
                                            </h1>
                                            <img src={bannerShape} alt="Images" />
                                        </div>
                                        <div className="sc-mb-40">We are ready and can to plan, execute and track social media marketing campaigns. Customize & craft your content.</div>
                                    </Fade>
                                    <div className="banner-video-area d-flex align-items-center">
                                        <Link className="gradiant-btn banner-button sc-mr-25" to="/signup#">
                                            <span>Get Started</span>
                                        </Link>
                                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="LlCwHnp3kL4" onClose={() => setOpen(false)} />
                                        <Link className="popup-video" onClick={() => setOpen(true)}>
                                            <i className="ri-play-fill"></i>
                                            <span className='ms-2'>Watch Intro</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sc-section-bg">
                    <img className="bg-image1" src={sectionBg} alt="Bg" />
                    <img className="bg-image2" src={sectionBg1} alt="Bg" />
                    <img className="bg-image3" src={sectionBg2} alt="Bg" />
                    <img className="bg-image4" src={sectionBg3} alt="Bg" />
                </div>
            </section>
        </>
    );
};

export default Home4Banner;