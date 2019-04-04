import React from 'react';

class TheNeighborhood extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
}

    render(){
      return(
        <div>
          <h1>The Neighborhood</h1>
          <p>{this.props.neighborhoodInfo}</p>
          <div>google maps of city: {this.props.city}</div>
          <p>Exact location shown after booking</p>
        </div>
      )
    }
}


export default TheNeighborhood;