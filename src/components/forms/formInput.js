// importing modules
import React from 'react';
import PropTypes from 'prop-types';

const formInput = ({ handleOnChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleOnChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

formInput.propTypes = {
    handleOnChange: PropTypes.func,
    label: PropTypes.string
};

formInput.defaultProps = {
    handleOnChange: () => {},
    label: ''
};

export default formInput;
