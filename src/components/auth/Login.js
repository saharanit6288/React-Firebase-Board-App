import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Global from '../Global';

class Login extends Component {
    constructor(props) {
        super(props);
        this.firebaseauth = Global.authentication;
        this.state = {
            email: '',
            password: '',
            error: null,
        };
      }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }

    onSubmit = (e) => {
        e.preventDefault();
        
        const { email, password } = this.state;
    
        this.firebaseauth
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          this.props.history.push('/');
        })
        .catch((error) => {
          this.setState({ error: error });
        });
      }

    componentDidMount() {
        
    }

    render() {
        const {
            email,
            password,
            error,
          } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

      return (            
        <div className="container">
            <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">
                    LogIn
                </h3>
            </div>
            <div className="panel-body">
                
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="description">Email:</label>
                        <input
                            name="email"
                            value={email}
                            onChange={this.onChange}
                            type="text"
                            placeholder="Email Address"
                            className="form-control col-md-4"
                            />
                    </div>
                    <div className="form-group">
                        <label for="author">Password:</label>
                        <input
                            name="password"
                            value={password}
                            onChange={this.onChange}
                            type="password"
                            placeholder="Password"
                            className="form-control col-md-4"
                            />
                    </div>
                    <button type="submit" disabled={isInvalid} className="btn btn-success">LogIn</button>

                    {error && <p>{error.message}</p>}
                </form>
            </div>
            <div className="panel-footer">
                <h4>Don't have an account?&nbsp;<Link to="/register">Register</Link></h4>
                <h4>Forgot Password?&nbsp;<Link to="/forgotpassword">Forgot Password</Link></h4>
            </div>
            </div>
        </div>
        );
    }
}

export default withRouter(Login);