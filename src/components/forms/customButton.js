/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';

const customButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);


export default customButton;
