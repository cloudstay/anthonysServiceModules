import React from 'react';

class Explore extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
}

    render(){
      return(
        <div>
          <div>Explore more places in and around {this.props.city}</div>
        </div>
      )
    }
}


export default Explore;