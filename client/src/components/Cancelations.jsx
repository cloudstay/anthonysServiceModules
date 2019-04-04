import React from 'react';

class Cancelations extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
}

    render(){
      return(
        <div>
          <h1>Cancelations</h1>
          <div>{this.props.policyDiagram}</div>
          <div>show more button here</div>
          <div>get more details button here</div>
        </div>
      )
    }
}


export default Cancelations;