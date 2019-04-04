import React from 'react';

class HostedBy extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

    render(){
      return(
        <div>
          <h2>{this.props.hostName}</h2>
          <div>{this.props.city}</div><div>{this.props.memberSince}</div>
          <div>{this.props.numOfReviews}</div><div>{JSON.stringify(this.props.isVerified)}</div>
          <p>{this.props.hostInfo}</p>
          <div>{this.props.languages}</div>
          <div>{this.props.responseTime}</div>
          <div>{this.props.responseRate}</div>
        </div>
      )
    }
}


export default HostedBy;