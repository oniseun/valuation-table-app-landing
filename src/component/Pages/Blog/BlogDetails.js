import React from 'react';
import Header from '../../Shared/Header';
import BreadCums from '../../Shared/BreadCums';
import BlogDetailsData from './BlogDetailsData';
import Footer from '../../Shared/Footer';

const BlogDetails = () => {
    return (
        <>
            <Header
                parentMenu='blog'
                headerClass='sc-header-section inner-header-style'
                signUpBtn='inner-btn'
            />
            <BreadCums pageTitle='Blog Details' />
            <BlogDetailsData />
            <Footer />
        </>
    );
};

export default BlogDetails;