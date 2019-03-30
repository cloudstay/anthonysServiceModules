import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    componentDidMount(){
        $.ajax({
            url: 'http://localhost:3001/test',
            type: 'GET',
            success: (data) => {
                console.log(data);
            }
        })
    }


    render(){
        return(
          <div>test</div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));