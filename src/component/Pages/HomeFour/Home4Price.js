import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import { HashLink as Link } from 'react-router-hash-link';
import priceImg from '../../../assets/images/feature/price_img.png'
import priceImg1 from '../../../assets/images/feature/price_img1.png'
import priceImg2 from '../../../assets/images/feature/price_img2.png'
import priceCheck from '../../../assets/images/icons/price-check.png'
import sectionBg10 from '../../../assets/images/banner/section-bg10.png'
import sectionBg11 from '../../../assets/images/banner/section-bg11.png'

const Home4Price = () => {
    let [priceToggle, setPriceToggle] = useState(true)
    return (
        <>
            <section className='section-bg-shape2'>
                <div className="sc-price-style p-z-idex sc-pb-130 sc-md-pb-70">
                    <div className="container">
                        <div className="sc-heading-area sc-mb-40 sc-md-mb-30 text-center">
                            <h2 className="title sc-mb-25">Special Price For <span className="gradiant-color">You</span></h2>
                        </div>
                        <div className="pricing-selector-two">
                            <form>
                                <button type="button" className="pricing-monthly-btn">Monthly</button>
                                <input type="checkbox" name="pricing-selector" id="pricing-selector" onChange={() => setPriceToggle(!priceToggle)} />
                                <button type="button" className="pricing-yearly-btn">Yearly <span>(35% Off)</span></button>
                            </form>
                        </div>
                        <div className={`${priceToggle ? 'pricing-monthly' : 'pricing-monthly d-none'}`}>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 sc-md-mb-30">
                                    <Fade bottom delay={100}>
                                        <div className="sc-price-box p-z-idex">
                                            <div className="price-box d-flex align-items-center">
                                                <div className="sc-price-image">
                                                    <img src={priceImg} alt="Images" />
                                                </div>
                                                <div className="price-item">
                                                    <h4 className="pric-title">Basic Plans</h4>
                                                    <div className="sc-price">$149.99<span className="month"> - Month</span></div>
                                                </div>
                                            </div>
                                            <div className="price-list">
                                                <ul className="list">
                                                    <li><img src={priceCheck} alt="Check" /> Free Consultation</li>
                                                    <li><img src={priceCheck} alt="Check" /> Full Services</li>
                                                    <li><img src={priceCheck} alt="Check" /> Weekly Maintenance</li>
                                                    <li><img src={priceCheck} alt="Check" /> 24/7 Support</li>
                                                </ul>
                                            </div>
                                            <div className="sc-primary-btn">
                                                <Link className="sc-gradiant-btn" to="/signup#"><span>Get Started</span></Link>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                                <div className="col-lg-4 col-md-6 sc-md-mb-30">
                                    <Fade bottom delay={200}>
                                        <div className="sc-price-box p-z-idex">
                                            <div className="price-box d-flex align-items-center">
                                                <div className="sc-price-image">
                                                    <img src={priceImg1} alt="Images" />
                                                </div>
                                                <div className="price-item">
                                                    <h4 className="pric-title">Regular Plans</h4>
                                                    <div className="sc-price">$349.99<span className="month"> - Month</span></div>
                                                </div>
                                            </div>
                                            <div className="price-list">
                                                <ul className="list">
                                                    <li><img src={priceCheck} alt="Check" /> Free Consultation</li>
                                                    <li><img src={priceCheck} alt="Check" /> Full Services</li>
                                                    <li><img src={priceCheck} alt="Check" /> Weekly Maintenance</li>
                                                    <li><img src={priceCheck} alt="Check" /> 24/7 Support</li>
                                                </ul>
                                            </div>
                                            <div className="sc-primary-btn">
                                                <Link className="sc-gradiant-active" to="/signup#"><span>Get Started</span></Link>
                                            </div>
                                            <div className="price_sale">
                                                <span className="popular">popular</span>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <Fade bottom delay={300}>
                                        <div className="sc-price-box p-z-idex">
                                            <div className="price-box d-flex align-items-center">
                                                <div className="sc-price-image">
                                                    <img src={priceImg2} alt="Images" />
                                                </div>
                                                <div className="price-item">
                                                    <h4 className="pric-title">Premium Plans</h4>
                                                    <div className="sc-price">$549.99<span className="month"> - Month</span></div>
                                                </div>
                                            </div>
                                            <div className="price-list">
                                                <ul className="list">
                                                    <li><img src={priceCheck} alt="Check" /> Free Consultation</li>
                                                    <li><img src={priceCheck} alt="Check" /> Full Services</li>
                                                    <li><img src={priceCheck} alt="Check" /> Weekly Maintenance</li>
                                                    <li><img src={priceCheck} alt="Check" /> 24/7 Support</li>
                                                </ul>
                                            </div>
                                            <div className="sc-primary-btn">
                                                <Link className="sc-gradiant-btn" to="/signup#"><span>Get Started</span></Link>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                        <div className={`${priceToggle ? 'pricing-yearly d-none' : 'pricing-yearly'}`}>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 sc-md-mb-30">
                                    <Fade bottom delay={100}>
                                        <div className="sc-price-box p-z-idex">
                                            <div className="price-box d-flex align-items-center">
                                                <div className="sc-price-image">
                                                    <img src={priceImg} alt="Images" />
                                                </div>
                                                <div className="price-item">
                                                    <h4 className="pric-title">Basic Plans</h4>
                                                    <div className="sc-price">$249.99<span className="month"> - Year</span></div>
                                                </div>
                                            </div>
                                            <div className="price-list">
                                                <ul className="list">
                                                    <li><img src={priceCheck} alt="Check" /> Free Consultation</li>
                                                    <li><img src={priceCheck} alt="Check" /> Full Services</li>
                                                    <li><img src={priceCheck} alt="Check" /> Weekly Maintenance</li>
                                                    <li><img src={priceCheck} alt="Check" /> 24/7 Support</li>
                                                </ul>
                                            </div>
                                            <div className="sc-primary-btn">
                                                <Link className="sc-gradiant-btn" to="/signup#"><span>Get Started</span></Link>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                                <div className="col-lg-4 col-md-6 sc-md-mb-30">
                                    <Fade bottom delay={200}>
                                        <div className="sc-price-box p-z-idex">
                                            <div className="price-box d-flex align-items-center">
                                                <div className="sc-price-image">
                                                    <img src={priceImg1} alt="Images" />
                                                </div>
                                                <div className="price-item">
                                                    <h4 className="pric-title">Regular Plans</h4>
                                                    <div className="sc-price">$649.99<span className="month"> - Year</span></div>
                                                </div>
                                            </div>
                                            <div className="price-list">
                                                <ul className="list">
                                                    <li><img src={priceCheck} alt="Check" /> Free Consultation</li>
                                                    <li><img src={priceCheck} alt="Check" /> Full Services</li>
                                                    <li><img src={priceCheck} alt="Check" /> Weekly Maintenance</li>
                                                    <li><img src={priceCheck} alt="Check" /> 24/7 Support</li>
                                                </ul>
                                            </div>
                                            <div className="sc-primary-btn">
                                                <Link className="sc-gradiant-active" to="/signup#"><span>Get Started</span></Link>
                                            </div>
                                            <div className="price_sale">
                                                <span className="popular">popular</span>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <Fade bottom delay={300}>
                                        <div className="sc-price-box p-z-idex">
                                            <div className="price-box d-flex align-items-center">
                                                <div className="sc-price-image">
                                                    <img src={priceImg} alt="Images" />
                                                </div>
                                                <div className="price-item">
                                                    <h4 className="pric-title">Premium Plans</h4>
                                                    <div className="sc-price">$749.99<span className="month"> - Year</span></div>
                                                </div>
                                            </div>
                                            <div className="price-list">
                                                <ul className="list">
                                                    <li><img src={priceCheck} alt="Check" /> Free Consultation</li>
                                                    <li><img src={priceCheck} alt="Check" /> Full Services</li>
                                                    <li><img src={priceCheck} alt="Check" /> Weekly Maintenance</li>
                                                    <li><img src={priceCheck} alt="Check" /> 24/7 Support</li>
                                                </ul>
                                            </div>
                                            <div className="sc-primary-btn">
                                                <Link className="sc-gradiant-btn" to="/signup#"><span>Get Started</span></Link>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sc-section-bg2">
                    <img className="bg-image11" src={sectionBg10} alt="Bg" />
                    <img className="bg-image12" src={sectionBg11} alt="Bg" />
                </div>
            </section>
        </>
    );
};

export default Home4Price;