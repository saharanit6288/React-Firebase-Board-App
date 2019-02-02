import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Global from '../Global';

class Logout extends Component {
    constructor(props)
    {
        super(props);
        this.firebaseauth = Global.authentication;
        this.state = {
        };
    }

    onLogout = (e) => {
        this.firebaseauth.signOut();
      }

    componentDidMount() {
        
    }

    render() {
      
      return (  
            <NavLink className="nav-link" to="#" onClick={this.onLogout}>LogOut</NavLink>          
        );
    }
}

export default Logout;
