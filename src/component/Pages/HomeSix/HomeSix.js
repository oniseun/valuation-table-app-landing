import React from 'react';
import Header from '../../Shared/Header';
import logo5 from '../../../assets/images/logo5.png'
import logo6 from '../../../assets/images/logo6.png'
import logo8 from '../../../assets/images/logo8.png'
import Home6Banner from './Home6Banner';
import Home6Service from './Home6Service';
import Home6Statistic from './Home6Statistic';
import Home6Feature from './Home6Feature';
import Home6Testimonial from './Home6Testimonial';
import Home6Faq from '../HomeFive/Home6Faq';
import CryptoApps from '../../Shared/CryptoApps';
import Footer2 from '../../Shared/Footer2';

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
            <Home6Statistic />
            <Home6Feature />
            <Home6Testimonial />
            <Home6Faq />
            <CryptoApps />
            <Footer2
                footerStyle="sc-footer-style-three"
                footerLogo={logo8}
            />
        </>
    );
};

export default HomeSix;