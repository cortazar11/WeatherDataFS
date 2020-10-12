import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchWeather, fetchPhotos, fetchTerm } from '../actions';
import { Link } from 'react-router-dom';

class PlacesList extends React.Component {
  renderList() {
    if (this.props.posts.results) {
      return this.props.posts.results.map((place, index) => {
        return (
          <Link to="weather" key={index}>
            <div
              className="ui segment"
              onClick={() =>
                this.props.fetchWeather(place.geometry) &&
                this.props.fetchPhotos(place) &&
                this.props.fetchTerm(place)
              }
            >
              {place.formatted}
            </div>
          </Link>
        );
      });
    }
  }
  render() {
    const results = this.props.posts.results;

    return (
      <div>
        <div className="ui list">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, {
  fetchPosts,
  fetchWeather,
  fetchPhotos,
  fetchTerm,
})(PlacesList);
