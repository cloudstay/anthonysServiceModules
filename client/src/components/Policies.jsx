import React from 'react';

class Policies extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
}

    render(){
      return(
        <div>
          <h1>Policies</h1>
          <h3>House Rules</h3>
          <div>Self Check In: {JSON.stringify(this.props.selfCheckIn)}</div><div>{this.props.checkInTime}</div>
          <div>{JSON.stringify(this.props.smoking)}</div><div>{JSON.stringify(this.props.parties)}</div>
          <div>{JSON.stringify(this.props.pets)}</div>
          <div>{JSON.stringify(this.props.securityDeposit)}</div><div>{this.props.depositAmount}</div>
          <div>Expand policies button</div>
        </div>
      )
    }
}


export default Policies;