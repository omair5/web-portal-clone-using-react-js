import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import DropdownForUserFeatures from './DropdownForUserFeatures'
import SignIn from './SignIn';
import Register from './Register';
import abaadeeLogo from './abaadeeLogo.png'
import { useSelector, useDispatch } from 'react-redux'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [dropdownUser, setdropdownUser] = useState(false);
    const AuthorizedUser = useSelector(state => state.AuthorizedUserReducer)
    const AuthorizedUserName = useSelector(state => state.AuthorizedUserNameReducer)
    const dispatch = useDispatch()

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
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

    const HandleClickUser = () => {
        setdropdownUser(!dropdownUser)
    }

    const handleClickAway = () => {
        setdropdownUser(false)

    }

    useEffect(() => {
        let mounted = true
        if (localStorage.getItem('secretkey')) {
            if (mounted) {
                dispatch({ type: 'set_authorized_user' })
                dispatch({ type: 'authorized_user_name', payload: localStorage.getItem('username') })
            };
            return () => mounted = false
        }
    }, [dispatch])

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src={abaadeeLogo} alt="LOGO" />
                </Link>

                {/* RESPONSIVE ICONS */}
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FontAwesomeIcon icon={faTimes} style={{ fontSize: '30px', marginRight: '18px', marginTop: '5px' }} /> : <FontAwesomeIcon icon={faBars} style={{ fontSize: '30px', marginRight: '15px', marginTop: '5px' }} />}
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

                    {/* <li className='nav-item'>
                        <Link to='/areaguide' className='nav-links' onClick={closeMobileMenu} > AreaGuide </Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to='/partners' className='nav-links' onClick={closeMobileMenu} > Partners </Link>
                    </li>
                    <div className='WhoWeAreHide'>
                        <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <div className='nav-links' >Who We Are <FontAwesomeIcon icon={faCaretDown} style={{ cursor: 'pointer' }} /></div>
                            {dropdown && <Dropdown />}
                        </li>
                    </div>
                    <div className='WhoWeAreShow'>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu} > About Us </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu} > Contact Us </Link>
                        </li>
                    </div>

                    {
                        AuthorizedUser ? null :
                            <li className='nav-item sigin-register-mobile'>
                                <SignIn /> or <Register />
                            </li>
                    }


                    {/* ADD PROPERTY BUTTON */}
                    <li className='forMobileAddButton' >
                        <Link to='/add-property' style={{ textDecoration: 'none' }} className='forMobileAddButton'><Button /></Link>
                    </li>
                </ul>

                {
                    AuthorizedUser &&
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <div className='userContainer' onClick={HandleClickUser}>
                            <AccountCircleIcon style={{ fontSize: '25px', marginRight: '5px', color: 'rgb(76, 84, 85)' }} />
                            <p>{AuthorizedUserName}</p>
                            <ArrowDropDownIcon style={{ marginLeft: '2px', color: 'white' }} />
                            {dropdownUser && <DropdownForUserFeatures />}
                        </div>
                    </ClickAwayListener>



                }
            </nav>
        </>
    );
}
export default React.memo(Navbar);