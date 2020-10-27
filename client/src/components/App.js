import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

import Home from './Home';
import CityDetail from './CityDetail';
import Header from './Header';
import Dashboard from './Dashboard';

import './App.css';

class App extends Component {
  componentDidMount(){
      this.props.fetchUser()
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/weather" component={CityDetail} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
 
};

export default connect(null,{
  fetchUser
})(App);
