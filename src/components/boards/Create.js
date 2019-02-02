import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Global from '../Global';

class Create extends Component {
    constructor(props) {
        super(props);
        this.ref = Global.boardCollection;
        this.state = {
          title: '',
          description: '',
          author: ''
        };
      }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }

    onSubmit = (e) => {
        e.preventDefault();
        
        const { title, description, author } = this.state;
    
        this.ref.add({
          title,
          description,
          author
        }).then((docRef) => {
          this.setState({
            title: '',
            description: '',
            author: ''
          });
          this.props.history.push("/boards");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      }

    componentDidMount() {
        
    }

    render() {
      const { title, description, author } = this.state;
      return (            
        <div className="container">
            <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">
                    Add Board
                </h3>
            </div>
            <div className="panel-body">
                
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label for="title">Title:</label>
                    <input type="text" className="form-control col-md-4" name="title" value={title} onChange={this.onChange} placeholder="Title" />
                </div>
                <div className="form-group">
                    <label for="description">Description:</label>
                    <textarea className="form-control col-md-4" name="description" value={description} onChange={this.onChange} placeholder="Description" cols="80" rows="3" />
                </div>
                <div className="form-group">
                    <label for="author">Author:</label>
                    <input type="text" className="form-control col-md-4" name="author" value={author} onChange={this.onChange} placeholder="Author" />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
            <div className="panel-footer">
                <h4><Link to="/boards">Board list</Link></h4>
            </div>
            </div>
        </div>
        );
    }
}

export default Create;