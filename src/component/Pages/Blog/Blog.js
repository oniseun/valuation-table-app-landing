import React from 'react';
import Header from '../../Shared/Header';
import BreadCums from '../../Shared/BreadCums';
import BlogNews from './BlogNews';
import Apps from '../../Shared/Apps';
import Footer from '../../Shared/Footer';

const Blog = () => {
    return (
        <>
            <Header
                parentMenu='blog'
                headerClass='sc-header-section inner-header-style'
                signUpBtn='inner-btn'
            />
            <BreadCums pageTitle='Blog & News' />
            <BlogNews />
            <Apps />
            <Footer />
        </>
    );
};

export default Blog;