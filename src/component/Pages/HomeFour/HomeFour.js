import React from 'react';
import Header from '../../Shared/Header';
import logo4 from '../../../assets/images/logo4.png'
import Home4Banner from './Home4Banner';
import Brands from '../../Shared/Brands';
import Home4Services from './Home4Services';
import Home4Media from './Home4Media';
import Home4Price from './Home4Price';
import Home4Testimonial from './Home4Testimonial';
import Home4Apps from './Home4Apps';
import Footer2 from '../../Shared/Footer2';

const HomeFour = () => {
  return (
    <>
      <Header
        parentMenu='home'
        headerNormalLogo={logo4}
        headerStickyLogo={logo4}
        headerClass='sc-header-section sc-header-section7'
        signUpBtn='gradiant-btn'
      />
      <Home4Banner />
      <Brands />
      <Home4Services />
      <Home4Media />
      <Home4Price />
      <Home4Testimonial />
      <Home4Apps />
      <Footer2 footerStyle="sc-footer-style-four" />
    </>
  );
};

export default HomeFour;