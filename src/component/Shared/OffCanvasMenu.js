import React from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import logoDark from '../../assets/images/logo-dark.png'

const OffCanvasMenu = (props) => {
    const location = useLocation();

    return (
        <>
            <div className='offcanvas-area'>
                <Link data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="ri-menu-line"></i></Link>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <Link to="/#"><img src={logoDark} alt="DarkLogo" /></Link>
                        <button type="button" className="offcanvasClose" data-bs-dismiss="offcanvas" aria-label="Close"><i className="ri-close-fill"></i></button>
                    </div>
                    <div className="offcanvas-body">
                        <nav className="navbar navbar-light">
                            <div className="w-100">
                                <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                <Link className={location.pathname === '/' ?  'nav-link active' : 'nav-link'} to="/#">Home</Link>
            </li>

                                        <li className="nav-item">
                <Link className={location.pathname === '/about' ?  'nav-link active' : 'nav-link'} to="/about#">About Us</Link>
            </li>
            <li  className="nav-item"><Link className={location.pathname === '/faq' ? 'nav-link active' : 'nav-link'} to="/faq#">Faq</Link></li>
            <li className="nav-item"><Link className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'} to="/contact#">Contact</Link></li>
            <li className="nav-item"><Link className={location.pathname === '/privacy-policy' ? 'nav-link active' : 'nav-link'} to="/privacy-policy#">Privacy Policy</Link></li>
            <li className="nav-item"><Link className={location.pathname === '/terms' ? 'nav-link active' : 'nav-link'} to="/terms#">Terms and Conditions</Link></li>
   
                              
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="offcanvas-icon-list">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/"><i className="ri-facebook-fill"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/"><i className="ri-instagram-fill"></i></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/"><i className="ri-linkedin-fill"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OffCanvasMenu;