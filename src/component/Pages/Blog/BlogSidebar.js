import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const BlogSidebar = () => {


    return (
        <>
            <div className="categories-area">

                <div className="categories-item sc-mb-25">
                    <h3 className="title sc-mb-15">Legal Stuff</h3>
                    <ul className="list">
                        <li><Link to="/terms#">Terms and Conditions</Link></li>
                        <li><Link to="/privacy-policy#">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BlogSidebar;