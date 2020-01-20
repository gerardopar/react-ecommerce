// import modules
import React from 'react';
// import { NavLink, withRouter } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// const MenuItem = ({ title, imageUrl, size, linkUrl }) => (
const MenuItem = ({
 title, imageUrl, size, history, linkUrl, match 
}) => (
    <div 
      className={`${size} menu`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div
          className="menu__bk"
          style={{
            backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="menu__content">
        { /* <NavLink to={`/shop/${linkUrl}`} className="menu__content--title">{title.toUpperCase()}</NavLink> */ }
        <h1 className="menu__content--title">{title.toUpperCase()}</h1>
        <span className="menu__content--subtitle">SHOP NOW</span>
        </div>
    </div>
);

MenuItem.propTypes = {
    history: PropTypes.objectOf(PropTypes.string),
    imageUrl: PropTypes.string,
    linkUrl: PropTypes.string,
    match: PropTypes.objectOf(PropTypes.string),
    size: PropTypes.string,
    title: PropTypes.string
};

MenuItem.defaultProps = {
    history: {},
    imageUrl: '',
    linkUrl: '',
    match: {},
    size: '',
    title: ''
};

// withRouter allows the component
// to have access to history, location, match values
export default withRouter(MenuItem);
