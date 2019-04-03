import React from 'react';
import $ from 'jquery';
import HostedBy from './HostedBy.jsx';
import Communications from './Communications.jsx';
import TheNeighborhood from './TheNeighborhood.jsx';
import Policies from './Policies.jsx';
import Cancelations from './Cancelations.jsx';
import RelatedHomes from './RelatedHomes.jsx';
import ThingsToDo from './ThingsToDo.jsx';
import Explore from './Explore.jsx';



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
        <div>
          <div>Hello Anthony!</div>
          <HostedBy/>
          <Communications/>
          <TheNeighborhood/>
          <Policies/>
          <Cancelations/>
          <RelatedHomes/>
          <ThingsToDo/>
          <Explore/>
        </div>
      )
    }
}


export default App;