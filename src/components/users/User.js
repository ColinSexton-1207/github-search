import React from 'react';
import UserBlock from './UserBlock';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const User = ({ user, loading }) => {
   if(loading) return <Spinner/>
   else {
      return (
         <div className='user_box' style={userStyle}>
            {user.map(user => (
               <UserBlock key={user.id} user={user}/>
            ))}
         </div>
      )
   }
}

User.propTypes = {
   user: PropTypes.array.isRequired,
   loading: PropTypes.bool.isRequired
}

/* --- Wicked Grid CSS --- */
const userStyle = {
   display: 'grid',
   gridTemplateColumns: 'repeat(3, 1fr)', // Note: Can't use dashes, so you use camelCase ---DON'T FORGET---
}

export default User