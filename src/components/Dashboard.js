import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        
    }

    render() {
      
      return (            
        <div className="container">
            <img src="https://cdn-images-1.medium.com/max/2600/1*h-xRzZOCHk8jTlEa8M42GA.png" 
                width="100%"
                height="350" 
                alt="" />
            <br />
            <p>
                <h3>This is react firebase demo boards app.</h3>
            </p>
        </div>
        );
    }
}

export default Dashboard;
