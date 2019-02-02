import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Global from '../Global';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.firebaseauth = Global.authentication;
        this.state = {
            email: '',
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
        
        const { email } = this.state;
    
        this.firebaseauth
        .sendPasswordResetEmail(email)
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
            error,
          } = this.state;

        const isInvalid =
            email === '';

      return (            
        <div className="container">
            <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">
                    Forgot Password
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
                    <button type="submit" disabled={isInvalid} className="btn btn-success">Submit</button>

                    {error && <p>{error.message}</p>}
                </form>
            </div>
            <div className="panel-footer">
                <h4>Don't have an account?&nbsp;<Link to="/register">Register</Link></h4>
                <h4>Already Member?&nbsp;<Link to="/login">Login</Link></h4>
            </div>
            </div>
        </div>
        );
    }
}

export default ForgotPassword;