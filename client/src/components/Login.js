import React, {Component} from 'react';
import {connect} from 'react-redux';

import Payments from './Payments';

class Login extends Component {

  renderContent() {
    console.log('auth', this.props.auth)
    switch(this.props.auth){
      
      case null:
        console.log('null')
        return;
      case false:
        console.log('Logged out')
        return (
          <li><a href="/auth/google">Log In With Google</a></li>
        )
      default:
        console.log('Logged in')
        return (
          [ 
            <li key="1"><Payments /></li>,
            <li key="3" style={{margin:'0 10px'}}>Credits: {this.props.auth.credits}</li>,
            <li key="2"><a href="/api/logout">Log Out</a></li>
            
          ]
        )
    }
  }

  render(){
    
    return (
      [this.renderContent()]
    )
  }
    
}

const mapPropsToState=({auth})=>{
    return {
          auth
    }
}

export default connect(mapPropsToState)(Login);