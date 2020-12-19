import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onClick = () => {
        if (window.innerWidth < 960) {
            setDropdown(true);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Abaadee.com
                </Link>

                {/* RESPONSIVE ICONS */}
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <CloseIcon style={{ fontSize: '40px' }} /> : <MenuIcon style={{ fontSize: '40px' }} />}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'>
                        <Link to='/explore' className='nav-links' onClick={closeMobileMenu}>Explore</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/developers' className='nav-links' onClick={closeMobileMenu} > Developers </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/agents' className='nav-links' onClick={closeMobileMenu} > Agents </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/blogs' className='nav-links' onClick={closeMobileMenu} > Blogs </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/areaguide' className='nav-links' onClick={closeMobileMenu} > AreaGuide </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/partners' className='nav-links' onClick={closeMobileMenu} > Partners </Link>
                    </li>
                    <div className='WhoWeAreHide'>
                        <li className='nav-item' onClick={onClick} onMouseLeave={onMouseLeave}>
                            {dropdown && <Dropdown />}
                            <div className='nav-links' >Who We Are <FontAwesomeIcon icon={faCaretDown} style={{ cursor: 'pointer' }} /></div>

                        </li>
                    </div>
                    <div className='WhoWeAreShow'>
                        <li className='nav-item'>
                            <Link  to='/about' className='nav-links' onClick={closeMobileMenu} > About Us </Link>
                        </li>
                        <li className='nav-item'>
                            <Link  to='/contact' className='nav-links' onClick={closeMobileMenu} > Contact Us </Link>
                        </li>
                    </div>

                    <li className='nav-item sigin-register-mobile'>
                        <span className='nav-sigin-register '>Sign in</span>  or <span className='nav-sigin-register'>Register</span>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    );
}

export default React.memo(Navbar);