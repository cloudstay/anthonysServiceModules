import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }


    render(){
        return(
          <div>test</div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));