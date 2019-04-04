import React from 'react';

class Listing extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
}

    render(){
      return(
        <div>
        <div>{this.props.listingImg}</div>
        <div>{this.props.roomArrangement}</div>
        <div>{this.props.listingTitle}</div>
        <div>{this.props.nightlyPrice}</div>
        <div>{this.props.reviewAvg}</div><div>{this.props.numOfReviews}</div>
        </div>
      )
    }
}


export default Listing;