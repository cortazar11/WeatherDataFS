import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Header.css';
import Login from './Login';


class Header extends Component {
  
  renderContent() {
      switch(this.props.auth){
        case null:
          return;
        case false:
          return (
            <li><a href="/auth/google">Log In With Google</a></li>
          )
        default:
          return (
            <li><a href="/api/logout">Log Out</a></li>
          )
      }
  }
  render(){
    
      return (
            <nav>
                <div className="nav-wrap">
                      <div className="left">
                            <h1
                                  style={{ color: '#263922' }}
                            >{`${this.props.city} (${this.props.county}, ${this.props.country})`}</h1>
                            <h3>{this.props.calendar}</h3>
                      </div>
                      <ul className="right">
                          <li>
                            <a href="/">
                                {/* <button className="ui button">Home</button> */}Home
                              </a>
                          </li>
                          
                          <Login />
                      </ul>
                </div>
          </nav>
    
        )
  }
}


export default Header;