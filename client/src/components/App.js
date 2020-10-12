import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import CityDetail from './CityDetail';

import './App.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/weather" component={CityDetail} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
