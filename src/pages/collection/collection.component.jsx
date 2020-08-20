import React from 'react';

import './collection.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';

const CollectionPage = () => (
    <div className='collection'>
        <h2>COLLECTION PAGE</h2>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    colletion: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);