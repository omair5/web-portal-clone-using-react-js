import React, { useState } from 'react';
import './Dropdown.css';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function DropdownForUserFeatures() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const HandleLogout = () => {
    setClick(false)
    localStorage.clear()
    history.push('/')
    dispatch({ type: 'remove_authorized_user_name' })
    dispatch({ type: 'clear_authorized_user' })
  }

  return (
    <>
      <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu positionForUserContainer'}>
        <li className='dropdown-link' onClick={HandleLogout}> Logout </li>
      </ul>
    </>
  );
}
export default React.memo(DropdownForUserFeatures);