import React from 'react';
import Header from '../../Shared/Header';
import logo5 from '../../../assets/images/logo5.png'
import logo6 from '../../../assets/images/logo6.png'
import logo8 from '../../../assets/images/logo8.png'
import Home6Banner from './Home6Banner';
import Home6Service from './Home6Service';
import Home6Feature from './Home6Feature';
import Home6Testimonial from './Home6Testimonial';
import Footer from '../../Shared/Footer';
import Apps from '../../Shared/Apps';

const HomeSix = () => {
    return (
        <>
            <Header
                parentMenu='home'
                headerNormalLogo={logo6}
                headerStickyLogo={logo5}
                headerClass='sc-header-section sc-header-section6'
                signUpBtn='sc-yellow-btn-two'
            />
            <Home6Banner />
            <Home6Service />
            <Home6Testimonial />
            <Home6Feature />
            <Apps />
            <Footer
                footerStyle="sc-footer-style-three"
                footerLogo={logo8}
            />
        </>
    );
};

export default HomeSix;