import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import moment from 'moment';

import './CityDetail.css';

class CityDetail extends React.Component {
  state = {
    isToogle: true,
    buttonDisable: false,
  };

  handleClick = (e) => {
    console.log('algo aqui', e.target);
    this.setState((prevState) => {
      return {
        isToogle: !prevState.isToogle,
        buttonDisable: !prevState.buttonDisable,
      };
    });
  };

  renderList() {
    const styleButtonRed={color: 'red'}
    const styleButtonBlack={color: 'black'}
    const results = this.props.weather;
    const resultsPhotos = this.props.photos;

    const photo1 = resultsPhotos[0];
    const photo2 = resultsPhotos[1];
    const photo3 = resultsPhotos[2];
    const photo4 = resultsPhotos[3];

    const timeUnix = results.currently ? results.currently.time : null;
    const calendar = moment
      .unix(timeUnix)
      .format('dddd, MMMM Do YYYY, h:mm:ss a');
    const summary = results.currently ? results.currently.summary : null;
    const icon = results.currently ? results.currently.icon : null;
    const temperatureF = results.currently
      ? results.currently.temperature
      : null;
    const temperatureC = (((parseFloat(temperatureF) - 32) * 5) / 9).toFixed(2);
    const temperature = this.state.isToogle ? temperatureC : temperatureF;
    console.log('temperatureC', temperatureC);
    const humidity = results.currently
      ? (results.currently.humidity * 100).toFixed(2)
      : null;
    const pressure = results.currently ? results.currently.pressure : null;
    const windSpeed = results.currently ? results.currently.windSpeed : null;
    const visibility = results.currently ? results.currently.visibility : null;
    const ozone = results.currently ? results.currently.ozone : null;
    let city = '';
    let county = '';
    let country = '';
    if (this.props.term.components) {
      city = this.props.term.components.city;
      county =
        this.props.term.components.county ||
        this.props.term.components.province;
      country = this.props.term.components.country;
    }

    if (
      timeUnix &&
      summary &&
      temperatureF &&
      humidity &&
      pressure &&
      windSpeed &&
      visibility &&
      ozone &&
      photo1 &&
      photo2 &&
      photo3 &&
      photo4
    ) {
      return (
        <div className="wrapper">
          <div className="header">
            <div className="city-time">
              <h1
                style={{ color: '#263922' }}
              >{`${city} (${county}, ${country})`}</h1>
              <h3>{calendar}</h3>
            </div>
            
            <a href="/">
              <button className="ui button">Back</button>
            </a>
            
          </div>
          
          <div className="item weather-details">
            <div></div>
            <div>
              <h2>Summary</h2>
              <p>{summary}</p>
            </div>
            <div>
              <h2>Temperature</h2>
              <p>
                {`${temperature}`} &nbsp;
                <button
                  className="button-sm"
                  disabled={!this.state.buttonDisable}
                  onClick={this.handleClick}
                  style={!this.state.buttonDisable? {color: 'black'}: {color: "red",cursor: 'pointer'}}
                >
                  ºC &nbsp;
                </button>
                | &nbsp;
                <button
                  style={this.state.buttonDisable? {color: "black"} : {color: 'red',cursor: 'pointer'}}
                  className="button-sm"
                  disabled={this.state.buttonDisable}
                  onClick={this.handleClick}
                 
                >
                  ºF
                </button>
              </p>
            </div>
            <div>
              <h2>Humidity</h2>
              <p>{`${humidity} %`}</p>
            </div>
            <div>
              <h2>Pressure</h2>
              <p>{`${pressure} millibars`}</p>
            </div>
            <div>
              <h2>Wind Speed</h2>
              <p>{`${windSpeed} miles per hour`}</p>
            </div>
            <div>
              <h2>Visibility</h2>
              <p>{`${visibility} miles`}</p>
            </div>
            <div>
              <h2>Ozone</h2>
              <p>{`${ozone} dobsons`}</p>
            </div>
          </div>
          <div className="item images">
            <img
              src={
                photo1.urls.raw +
                '&auto=format&w=250&h=200&auto=compress&fit=clamp'
              }
              alt={photo1.alt_description}
            />
            <img
              src={
                photo2.urls.raw +
                '&auto=format&w=250&h=200&auto=compress&fit=clamp'
              }
              alt={photo2.alt_description}
            />
            <img
              src={
                photo3.urls.raw +
                '&auto=format&w=250&h=200&auto=compress&fit=clamp'
              }
              alt={photo3.alt_description}
            />
            <img
              src={
                photo4.urls.raw +
                '&auto=format&w=250&h=200&auto=compress&fit=clamp'
              }
              alt={photo4.alt_description}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="containerCity">
          <p></p>
          <div className="ui active dimmer">
            <div className="ui loader"></div>
          </div>
        </div>
      );
    }
  }

  render() {
    console.log('weather', this.props.weather);
    console.log('photos', this.props.photos);
    console.log('term', this.props.term.components);
    return (
      <div className="containerCity">
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    photos: state.photos,
    term: state.term,
  };
};

export default connect(mapStateToProps)(CityDetail);
