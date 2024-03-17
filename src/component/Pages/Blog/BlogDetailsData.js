import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import BlogSidebar from './BlogSidebar';
import pagesBlogImg from '../../../assets/images/blog/pages_blog_img.jpg';

const BlogDetailsData = () => {
    return (
        <>
            <section>
                <div className="sc-blog-details sc-pt-140 sc-md-pt-80 sc-pb-20 sc-md-pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="blog-item">
                                    <div className="blog-image">
                                        <Link smooth to="#"><img src={pagesBlogImg} alt="Blog" /></Link>
                                    </div>
                                    <div className="blog-content p-0">
                                        <div className="blog_date">
                                            <ul>
                                                <li>17</li>
                                                <li>Mar</li>
                                                <li>24</li>
                                            </ul>
                                        </div>
                                        <div className="blog-list-menu list_menu sc-pt-20">
                                            <ul className="blog-list">
                                                <li><i className="ri-edit-fill"></i> Last Updated: 17th March 2024</li>
                                            </ul>
                                        </div>
                                        <h2 className="blog-title sc-pt-15 sc-mb-15 fw-bold">
                                            We can blend colors multiple ways, the most common
                                        </h2>
                                    </div>
                                </div>
                                <div className="details-content-area sc-md-mb-50">
                                    <div className="details-content">
                                        <div className="description sc-mb-25">
                                            Nisl pretium fusce id velit ut tortor pretium viverra. Odio aenean sed adipiscing diam. Sed risus pretium quam vulputate dignissim suspendisse
                                            in. Laoreet sit amet cursus sit. Imperdiet dui accumsan sit amet. Viverra orci sagittis eu volutpat odio facilisis mauris sit. Tempus quam
                                            pellentesque nec nam aliquam sem. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Habitasse platea dictumst vestibulum rhoncus
                                            est.
                                        </div>
                                        <div className="description sc-mb-25">
                                            At erat pellentesque adipiscing commodo. Enim ut sem viverra aliquet eget. Placerat orci nulla pellentesque dignissim enim sit. Ornare aenean
                                            euismod elementum nisi quis eleifend quam. Volutpat sed cras ornare arcu dui vivamus arcu. Blandit libero volutpat sed cras ornare arcu dui
                                            vivamus arcu. Vitae sapien pellentesque habitant morbi. Ac felis donec et odio pellentesque. Dictumst vestibulum rhoncus est pellentesque
                                        </div>
         
                                        <div className="description sc-mb-25">
                                            Ullamcorper eget nulla facilisi etiam dignissim diam quis. At elementum eu facilisis sed. Venenatis a condimentum vitae sapien pellentesque
                                            habitant morbi tristique senectus. At in tellus integer feugiat scelerisque varius morbi. Tempor id eu nisl nunc mi ipsum faucibus vitae. Dolor
                                            sed viverra ipsum nunc aliquet bibendum enim facilisis. Id neque aliquam vestibulum morbi blandit cursus risus at. Euismod nisi porta lorem
                                            mollis aliquam.
                                        </div>
                                    </div>                         
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <BlogSidebar></BlogSidebar>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetailsData;