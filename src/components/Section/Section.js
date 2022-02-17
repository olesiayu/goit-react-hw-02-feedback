import React from 'react';
// import PropTypes from 'prop-types';
// import s from './Profile.module.css';

const Section = ({ title, children }) => {
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
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

export default Section;
 