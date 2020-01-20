// importing modules
import React, { Component } from 'react';
// importing shop data
import shopData from '../../../data/shop-data';
// importing components
import CollectionPreview from '../../UI/collectionPreview/collectionPreview';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: shopData
        };
    }

    render() {
        const { collections } = this.state;

        return (
            <div className="shop-page">
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
            </div>
        );
    }
}

export default ShopPage;
