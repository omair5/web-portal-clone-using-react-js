import React, { useState } from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        <li >
          <Link
            className='dropdown-link'
            to='/about'
            onClick={() => setClick(false)}
          >
            About Us
              </Link>
        </li>

        <li >
          <Link
            className='dropdown-link'
            to='/contact'
            onClick={() => setClick(false)}
          >
            Contact Us
              </Link>
        </li>
      </ul>
    </>
  );
}

export default React.memo(Dropdown);