import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
const Layout = ({ children, FooterDisplay }) => {
    return (
        <div>
            <Navbar />
            {children}
            {FooterDisplay && <Footer />}

        </div>
    );
}
export default React.memo(Layout);