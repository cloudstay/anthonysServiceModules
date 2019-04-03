import React from 'react';
import $ from 'jquery';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
          allListings: []
        }
    }

    componentDidMount(){
        $.ajax({
            url: 'http://localhost:3001/api/listings',
            type: 'GET',
            success: (data) => {
                this.setState({
                    allListings: data
                })
            }
        })
    }


    render(){
        return(
          <div>app has rendered</div>
        );
    }
}


export default App;