// importing modules
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// importing assets
import crown from '../../../assets/img/crown.svg';
// importing firebase services
import { auth } from '../../../firebase/firebase.utils';

const header = ({ currentUser }) => (
    <div className="header">
        <NavLink to="/" className="header__logo">
            <img src={crown} alt="crown logo" />
        </NavLink>
        <div className="header__nav">
            <NavLink to="/shop" className="header__nav--item">SHOP</NavLink>
            <NavLink to="/contact" className="header__nav--item">CONTACT</NavLink>
            {
                currentUser 
                    ? <div className="header__nav--item" onClick={() => auth.signOut()}>SIGN OUT</div> 
                    : <NavLink to="/signin" className="header__nav--item">SIGN IN</NavLink>
            }
        </div>
    </div>
);

header.propTypes = {
    currentUser: PropTypes.string
};

header.defaultProps = {
    currentUser: null
};

export default header;
