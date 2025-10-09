import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const Logo = ({ className, imagePath = '/assets/images/logo.svg' }) => {
  return (
    <a href="/">
      <img 
        className={clsx("w-32 sm:w-56", className)}
        src={imagePath} 
        alt="Logo"
      />
    </a>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
  imagePath: PropTypes.string.isRequired
};

export default Logo