import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

import './Home.css';

import SearchBar from './SearchBar';
import PlacesList from './PlacesList';
import Login from './Login';

class Home extends React.Component {
  render() {
    return (
      <div className="ui container">
        
        <ul>
          <Login />
        </ul>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <PlacesList />
      </div>
    );
  }
}

export default connect(null, { fetchPosts })(Home);
