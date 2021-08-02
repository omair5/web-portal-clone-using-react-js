import React, { useState } from 'react';
import './Dropdown.css';
// import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Divider from '@material-ui/core/Divider';


function DropdownForUserFeatures() {
  // const history = useHistory()
  const dispatch = useDispatch()
  const AuthorizedUserName = useSelector(state => state.AuthorizedUserNameReducer)
  console.log('jcjbodcfndjb', AuthorizedUserName)

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
        <li className='dropdown-link' onClick={HandleLogout}> My Listings </li>
        <li className='dropdown-link' onClick={HandleLogout}> Dashboard </li>
        <li className='dropdown-link' onClick={HandleLogout}> Account Setting </li>
        <li className='dropdown-link' onClick={HandleLogout}> Change Password </li>
        <hr />
        <li className='dropdown-link' onClick={HandleLogout}> Logout </li>
      </ul>
    </>
  );
}
export default React.memo(DropdownForUserFeatures);