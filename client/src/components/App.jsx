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
            listing: {},
            relatedListings: [],
            thingsToDo: []
        }
    }

    componentDidMount(){
        $.ajax({
            url: 'http://localhost:3001/api/listings',
            type: 'GET',
            success: (data) => {
                var randomNum = Math.floor(Math.random() * Math.floor(100));
                this.setState({
                    listing: data[randomNum],
                    relatedListings: data[randomNum].relatedHomes,
                    thingsToDo: data[randomNum].thingsToDo
                })
            }
        })
    }

    render(){
      return(
        <div>
          <div>Hello Anthony! Your app just rendered!</div>
          <HostedBy hostName={this.state.listing.hostName} city={this.state.listing.city} memberSince={this.state.listing.memberSince} isVerified={this.state.listing.isVerified} numOfReviews={this.state.listing.numOfReviews} hostInfo={this.state.listing.hostInfo} languages={this.state.listing.languages} responseRate={this.state.listing.responseRate} responseTime={this.state.listing.responseTime}/>
          <Communications/>
          <TheNeighborhood neighborhoodInfo={this.state.listing.neighborhoodInfo} city={this.state.listing.city}/>
          <Policies selfCheckIn={this.state.listing.selfCheckIn} checkInTime={this.state.listing.checkInTime} smoking={this.state.listing.smoking} parties={this.state.listing.parties} pets={this.state.listing.pets} securityDeposit={this.state.listing.securityDeposit} depositAmount={this.state.listing.depositAmount}/>
          <Cancelations policyDiagram={this.state.listing.policyDiagram}/>
          <RelatedHomes listings={this.state.relatedListings}/>
          <ThingsToDo thingsToDo={this.state.thingsToDo}/>
          <Explore city={this.state.listing.city}/> 
        </div>
      )
    }
}


export default App;