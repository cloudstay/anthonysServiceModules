import React from 'react';

class Event extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
}

    render(){
      return(
        <div>
          <div>{this.props.eventImg}</div>
          <div>{this.props.eventCategory}</div>
          <div>{this.props.eventName}</div>
          <div>{this.props.price}</div>
          <div>{this.props.ratingAvg}</div><div>{this.props.numOfRatings}</div>
        </div>
      )
    }
}


export default Event;