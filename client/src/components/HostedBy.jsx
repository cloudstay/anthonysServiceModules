import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

class HostedBy extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isVerified: 'Not Verified'

    }
  }

  componentDidMount(){
    if (this.props.isVerified){
      this.setState({
        isVerified: false      
      });
    }
  }

    render(){
      if (this.props.isVerified){
        return(
          <div>
            <div className='line-break'></div>
            <h2 id='hostedByHostName'>Hosted By {this.props.hostName}</h2>
            <div className='container'><div id='hostedByCity' className='hostedBySpaced'>{this.props.city}</div><div>·</div><div id='hostedByMemberSince' className='hostedBySpaced'>Joined on {this.props.memberSince}</div></div>
            <div className='container'><div id='hostedByNumOfReviews' className='hostedBySpaced'>{this.props.numOfReviews} Reviews</div><div id='hostedByIsVerified' className='hostedBySpaced'></div>Verified!</div>
            <p id='hostedByHostInfo'>{this.props.hostInfo}</p>
            <div id='hostedByLanguages'>Languages: <strong>{this.props.languages}</strong></div>
            <div id='hostedByResponseRate'>Response rate: <strong>{this.props.responseRate}%</strong></div>
            <div id='hostedByResponseTime'>Response time: <strong>within {this.props.responseTime} hours</strong></div>
            <button id='hostedByContactHost'>Contact host</button>
            <div className='line-break'></div>
          </div>
        )
      } else {
        return (
          <div>
            <div className='line-break'></div>
            <h2 id='hostedByHostName'>Hosted By {this.props.hostName}</h2>
            <div className='container'><div id='hostedByCity' className='hostedBySpaced'>{this.props.city}</div><div>·</div><div id='hostedByMemberSince' className='hostedBySpaced'>Joined on {this.props.memberSince}</div></div>
            <div className='container'><div id='hostedByNumOfReviews' className='hostedBySpaced'>{this.props.numOfReviews} Reviews</div><div id='hostedByIsVerified' className='hostedBySpaced'></div></div>
            <p id='hostedByHostInfo'>{this.props.hostInfo}</p>
            <div id='hostedByLanguages'>Languages: <strong>{this.props.languages}</strong></div>
            <div id='hostedByResponseRate'>Response rate: <strong>{this.props.responseRate}%</strong></div>
            <div id='hostedByResponseTime'>Response time: <strong>within {this.props.responseTime} hours</strong></div>
            <button id='hostedByContactHostButton'>Contact host</button>
            <div className='line-break'></div>
          </div>
      )
    }
  }
}

export default HostedBy;