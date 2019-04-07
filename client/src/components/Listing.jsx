import React from 'react';

class Listing extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
}

    render(){
      return(
        <div id='listingContainer'>
          <div id='listingImgContainer'><img className='listingImg' src={this.props.listingImg}></img></div>
          <div id='listingInfoContainer'>
          <div><span id='listingType'><strong>{(this.props.roomArrangement).toUpperCase() + ' · ' + (this.props.city).toUpperCase()}</strong></span></div>
          <div><strong>{this.props.listingTitle}</strong></div>
          <div><span id='pricing'>{'$' + this.props.nightlyPrice + ' per night'}</span></div>
            <div>
              <div><span id='carouselStar'></span><span id='reviews'><strong>{this.props.numOfReviews}</strong></span></div>
            </div>
          </div>
        </div>
      )
    }
}


export default Listing;