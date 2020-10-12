import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import './Home.css';

import SearchBar from './SearchBar';
import PlacesList from './PlacesList';

class Home extends React.Component {
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <PlacesList />
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(Home);
