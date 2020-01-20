// importing modules
import React from 'react';
import PropTypes from 'prop-types';


const collectionItem = ({
 id, name, price, imageUrl 
}) => (
    <div className="collectionItem">
      <div
        className="collectionItem__image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collectionItem__footer">
        <span className="collectionItem__footer--name">{name}</span>
        <span className="collectionItem__footer--price">{price}</span>
      </div>
    </div>
  );

  collectionItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string
  };

  collectionItem.defaultProps = {
    id: '',
    name: '',
    price: 0,
    imageUrl: ''
  };
  
export default collectionItem;
