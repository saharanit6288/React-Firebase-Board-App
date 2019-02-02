import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Global from '../Global';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.firebaseauth = Global.authentication;
        this.state = {
            password: '',
            confirmpassword: '',
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
        
        const { password } = this.state;
    
        this.firebaseauth
        .currentUser.updatePassword(password)
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
            confirmpassword,
            password,
            error,
          } = this.state;

        const isInvalid =
            password !== confirmpassword || 
            password === '';;

      return (            
        <div className="container">
            <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">
                    Change Password
                </h3>
            </div>
            <div className="panel-body">
                
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="description">New Password:</label>
                        <input
                            name="password"
                            value={password}
                            onChange={this.onChange}
                            type="password"
                            placeholder="New Password"
                            className="form-control col-md-4"
                            />
                    </div>
                    <div className="form-group">
                        <label for="author">Confirm Password:</label>
                        <input
                            name="confirmpassword"
                            value={confirmpassword}
                            onChange={this.onChange}
                            type="password"
                            placeholder="Confirm New Password"
                            className="form-control col-md-4"
                            />
                    </div>
                    <button type="submit" disabled={isInvalid} className="btn btn-success">Submit</button>

                    {error && <p>{error.message}</p>}
                </form>
            </div>
            <div className="panel-footer">
                <h4>&nbsp;</h4>
            </div>
            </div>
        </div>
        );
    }
}

export default withRouter(ChangePassword);