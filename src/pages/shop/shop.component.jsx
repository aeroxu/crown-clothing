import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'

import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from "../collection/collection.component";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {

  componentDidMount(){
    const {  fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => 
          <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>} />
        <Route path={`${match.path}/:collectionId`} render={(props) => 
          <CollectionsPageWithSpinner isLoading={isCollectionFetching} {...props}/>}/>
      </div>
    )
  }
} 

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
});

const mapToDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapToDispatchToProps)(ShopPage);