import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({icon, title}) => {
   return (
      <nav className='navbar'>
         <h1><i className={icon}/>{title}</h1>
      </nav>
   );
}

Navbar.defaultProps = {
   title: 'Github Index',
   icon: 'fab fa-github'
}

Navbar.propTypes = {
   title: PropTypes.string.isRequired,
   icon: PropTypes.string // Not required, but nice to have
}

export default Navbar;