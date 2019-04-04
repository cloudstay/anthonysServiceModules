import React from 'react';
import Listing from './Listing.jsx';

class RelatedHomes extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
}

    render(){
      var listings = this.props.listings.map((listing, index) => {
        return <Listing key={index} listingId={listing.listingId} listingImg={listing.listingImg} roomArrangement={listing.roomArrangement} listingTitle={listing.listingTitle} nightlyPrice={listing.nightlyPrice} reviewAvg={listing.reviewAvg} numOfReviews={listing.numOfReviews}/>
      })
      return(
        <div>
          <h2>More homes you may like</h2>
          <ol>{listings}</ol>
        </div>
      )
    }
}


export default RelatedHomes;