import React from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const MenuItems = (props) => {
    const location = useLocation();

    return (
        <>
            <li>
                <Link className={location.pathname === '/' ? 'active' : ''} to="/#">Home</Link>
            </li>
            <li><Link className={location.pathname === '/faq' ? 'active' : ''} to="/faq#">Faq</Link></li>
            <li><Link className={location.pathname === '/contact' ? 'active' : ''} to="/contact#">Contact</Link></li>
            <li><Link className={location.pathname === '/privacy-policy' ? 'active' : ''} to="/privacy-policy#">Privacy Policy</Link></li>
            
        </>
    );
}

export default MenuItems;