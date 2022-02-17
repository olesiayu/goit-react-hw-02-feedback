import React from 'react';
// import PropTypes from 'prop-types';
// import s from './Profile.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {    
    return (
        <div>
            {options.map(option => (
                <button type="button" key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
  ))}
        </div>
        
    )
}

// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }),
// }

export default FeedbackOptions;
 