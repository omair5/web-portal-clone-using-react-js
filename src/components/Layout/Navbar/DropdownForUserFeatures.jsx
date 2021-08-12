import React, { useState } from 'react';
import './Dropdown.css';
// import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';


function DropdownForUserFeatures() {
  // const history = useHistory()
  const dispatch = useDispatch()
  const AuthorizedUserName = useSelector(state => state.AuthorizedUserNameReducer)

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const HandleLogout = () => {
    setClick(false)
    localStorage.clear()
    // history.push('/')
    window.location.href = "/";
    dispatch({ type: 'remove_authorized_user_name' })
    dispatch({ type: 'clear_authorized_user' })
  }

  return (
    <>
      <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu positionForUserContainer'}>
        <div className='usernameInDropDown'>
          <h5 className='dropdown-link'>{AuthorizedUserName}</h5>
          <Divider variant="middle" />
        </div>
        <Link to='my-listings' className='link'><li className='dropdown-link'> My Listings </li></Link>
        <Link to='/dashboard' className='link'><li className='dropdown-link'> Dashboard </li></Link>
        <Link to='/account-setting' className='link'><li className='dropdown-link'> Account Setting </li></Link>
        <Link to='/change-password' className='link'><li className='dropdown-link'> Change Password </li></Link>
        <hr />
        <li className='dropdown-link' onClick={HandleLogout}> Logout </li>
      </ul>
    </>
  );
}
export default React.memo(DropdownForUserFeatures);