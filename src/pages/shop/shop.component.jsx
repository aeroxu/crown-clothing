import React, { Component } from "react";

import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

class ShopPage extends Component {
  unsubscribeFromSnapshop = null;

  componentDidMount(){
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collection');

    this.unsubscribeFromSnapshop = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </div>
    )
  }
} 

const mapToDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections('collections'))
})

export default connect(null, mapToDispatchToProps)(ShopPage);