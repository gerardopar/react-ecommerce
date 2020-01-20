// importing modules
import React from 'react';
import PropTypes from 'prop-types';
// importing components
import CollectionItem from '../collection-item/CollectionItem';

const collectionPreview = ({ title, items }) => (
  <div className="collectionPreview">
    <h1 className="collectionPreview__title">{title.toUpperCase()}</h1>
    <div className="collectionPreview__preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

collectionPreview.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object)
};

collectionPreview.defaultProps = {
    title: '',
    items: []
};

export default collectionPreview;
