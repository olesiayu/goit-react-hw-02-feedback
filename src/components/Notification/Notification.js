import React from 'react';
import PropTypes from 'prop-types';
// import s from './Profile.module.css';

const Notification = ({ message }) => {
    return (
        <div>
            <p>{message}</p>            
       </div> 
    )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,  
}

export default Notification;
 