import React, { Component } from 'react';
import { withRouter,Link } from 'react-router-dom';
import Global from '../Global';

class List extends Component {
    constructor(props) {
        super(props);
        this.ref = Global.boardCollection;
        this.unsubscribe = null;
        this.state = {
          boards: []
        };
      }

    onCollectionUpdate = (querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
            const { title, description, author } = doc.data();
            boards.push({
            key: doc.id,
            doc, // DocumentSnapshot
            title,
            description,
            author,
            });
        });
        this.setState({ boards });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
      return (            
        <div className="container">
            <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">
                    Board List
                </h3>
            </div>
            <div className="panel-body">
                <h4><Link to="/create">Add Board</Link></h4>
                <table className="table table-stripe">
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Author</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.boards.map((board,i) =>
                    <tr key={i}>
                        <td><Link to={`/info/${board.key}`}>{board.title}</Link></td>
                        <td>{board.description}</td>
                        <td>{board.author}</td>
                    </tr>
                    )}
                </tbody>
                </table>
            </div>
            </div>
        </div>
        );
    }
}

export default withRouter(List);