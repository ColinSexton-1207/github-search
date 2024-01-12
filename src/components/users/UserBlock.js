import React from 'react';
import PropTypes from 'prop-types';

const UserBlock = ({user: { login, avatar_url, html_url }}) => {
   return (
      <div className='user_box'>
         <div className='profile_box'>
            <img src={avatar_url} className='box_avatar' alt='User Avatar' style={{width: '60px'}}/>
            <h3>{login}</h3>
            <div className='profile_text'>
               <a href={html_url} className='profile_btn'>Profile</a>
            </div>
         </div>
      </div>
   );
}

UserBlock.propTypes = {
   user: PropTypes.object.isRequired
}

export default UserBlock