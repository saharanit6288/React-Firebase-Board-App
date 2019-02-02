import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Router from './Router';
import Global from './components/Global';

class App extends Component {
  constructor(props) {
    super(props);
    this.firebaseauth = Global.authentication;
    this.state = {
      authenticated: false
    };
  }

  componentDidMount() {
    this.firebaseauth.onAuthStateChanged((authenticated) => {
      authenticated
        ? this.setState(() => ({
            authenticated: true,
          }))
        : this.setState(() => ({
            authenticated: false,
          }));
    });
  }

  render() {
    return (
      <Router authenticated={this.state.authenticated} />
    );
  }
}

export default App;
