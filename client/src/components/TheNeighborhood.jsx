import React from 'react';
import apiKeyFile from '../../../googleApiKey.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const apiKey = apiKeyFile.apiKey;

class TheNeighborhood extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
}

    render(){
      return(
        <div>
          <div className='line-break'></div>
          <h2>The Neighborhood</h2>
          <div>{this.props.city}</div>
          <p>{this.props.neighborhoodInfo}</p>
          <div id='map'>
            <Map google={this.props.google} zoom={14}><Marker onClick={this.onMarkerClick} name={'Current location'} />
              {/* <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
              </InfoWindow> */}
            </Map>
          </div>
          <p>Exact location information is provided after a booking is confirmed.</p>
          <div className='line-break'></div>
        </div>
      )
    }
}


// export default TheNeighborhood;

export default GoogleApiWrapper({
  apiKey: (apiKey)
})(TheNeighborhood)