import React from 'react';
import Header from '../../Shared/Header';
import Home5Banner from './Home5Banner';
import Home5Service from './Home5Service';
import Home5Statistic from './Home5Statistic';
import Home5Feature from './Home5Feature';
import Home5Testimonial from './Home5Testimonial';
import Home5Faq from './Home5Faq';
import CryptoApps from '../../Shared/CryptoApps';
import Footer2 from '../../Shared/Footer2';
import logo5 from '../../../assets/images/logo5.png'
import logo6 from '../../../assets/images/logo6.png'


const HomeFive = () => {
    return (
        <>
            <Header
                parentMenu='home'
                headerNormalLogo={logo5}
                headerStickyLogo={logo5}
                headerClass='sc-header-section sc-header-section5'
                signUpBtn='sc-yellow-btn-two'
            />
            <Home5Banner />
            <Home5Service />
            <Home5Statistic />
            <Home5Feature />
            <Home5Testimonial />
            <Home5Faq />
            <CryptoApps />
            <Footer2
                footerStyle="sc-footer-style-two"
                footerLogo={logo6}
            />
        </>
    );
};

export default HomeFive;