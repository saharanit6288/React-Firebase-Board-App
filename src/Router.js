import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Edit from './components/boards/Edit';
import Create from './components/boards/Create';
import List from './components/boards/List';
import Info from './components/boards/Info';
import Dashboard from './components/Dashboard';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import ForgotPassword from './components/auth/ForgotPassword';
import ChangePassword from './components/auth/ChangePassword';
import ProtectedRoute from './ProtectedRoute';

const NavigationAuth = () => (
    <ul className="nav navbar-nav">
      <li className="nav-item"><NavLink className="nav-link" to="/changepassword">Change Password</NavLink></li>
      <li className="nav-item"><Logout /></li>
    </ul>
  );
  
  const NavigationNonAuth = () => (
    <ul className="nav navbar-nav">
      <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link" to="/register">Register</NavLink></li>
    </ul>
  );

class Router extends Component {
    render() {
      return (            
            <div>
                <nav class="navbar navbar-expand-sm bg-light">
                    <div class="navbar-header">
                        <NavLink className="navbar-brand" to="/">React Firestore Boards</NavLink>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/boards">Boards</NavLink></li>
                    </ul>
                    {this.props.authenticated ? <NavigationAuth /> : <NavigationNonAuth />}
                </nav>
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/register' component={Register} />
                    <Route path='/login' authenticated={this.props.authenticated} component={Login} />
                    <Route path='/forgotpassword' component={ForgotPassword} />
                    <ProtectedRoute authenticated={this.props.authenticated} path="/changepassword" component={ChangePassword} />
                    <ProtectedRoute authenticated={this.props.authenticated} path="/boards" component={List} />
                    <ProtectedRoute authenticated={this.props.authenticated} path="/edit/:id" component={Edit} />
                    <ProtectedRoute authenticated={this.props.authenticated} path="/create" component={Create} />
                    <ProtectedRoute authenticated={this.props.authenticated} path="/info/:id" component={Info} />
                </Switch>
            </div>
        );
    }
}

export default Router;