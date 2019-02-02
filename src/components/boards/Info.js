import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Global from '../Global';

class Info extends Component {
    constructor(props)
    {
        super(props);
        this.ref = Global.boardCollection;
        this.state = {
            info: {},
            boardId: props.match.params.id
        };
    }

    fetchBoard(boardId) {
        const ref = this.ref.doc(boardId);
        ref.get().then((doc) => {
          if (doc.exists) {
            this.setState({
              info: doc.data()
            });
          } else {
            console.log("No such document!");
            this.setState({ info: {} });
          }
        });
    }

    deleteBoard(boardId){
        this.ref.doc(boardId).delete().then(() => {
          console.log("Document successfully deleted!");
          this.props.history.push("/boards");
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }

    componentDidMount() {
        this.fetchBoard(this.state.boardId);
    }

    render() {
      
      return (            
        <div className="container">
            <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">
                    {this.state.info.title}
                </h3>
            </div>
            <div className="panel-body">
                <dl>
                <dt>Description:</dt>
                <dd>{this.state.info.description}</dd>
                <dt>Author:</dt>
                <dd>{this.state.info.author}</dd>
                </dl>
                <Link to={`/edit/${this.state.boardId}`} className="btn btn-success">Edit</Link>&nbsp;
                <button onClick={this.deleteBoard.bind(this, this.state.boardId)} className="btn btn-danger">Delete</button>
            </div>
            </div>
            <div className="panel-footer">
                <h4><Link to="/boards">Board list</Link></h4>
            </div>
        </div>
        );
    }
}

export default Info;
