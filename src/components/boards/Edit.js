import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Global from '../Global';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          description: '',
          author: '',
          id: props.match.params.id
        };
      }

    fetchBoard(boardId) {
        const ref = Global.boardCollection.doc(boardId);
        ref.get().then((doc) => {
          if (doc.exists) {
            const board = doc.data();
            this.setState({
                title: board.title,
                description: board.description,
                author: board.author
            });
          } else {
            console.log("No such document!");
            this.setState({ info: {} });
          }
        });
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
      }

    onSubmit = (e) => {
        e.preventDefault();
    
        const { title, description, author } = this.state;
        const updateRef = Global.boardCollection.doc(this.state.id);
        updateRef.set({
            title,
            description,
            author
        }).then((docRef) => {
          this.setState({
            title: '',
            description: '',
            author: '',
            id: ''
          });
          this.props.history.push("/boards");
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      }

    componentDidMount() {
        this.fetchBoard(this.state.id);
    }

    render() {
      const { title, description, author } = this.state;
      return (            
        <div className="container">
            <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">
                    Edit Board
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

export default Edit;