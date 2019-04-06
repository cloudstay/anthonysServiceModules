import React from 'react';
import Event from './Event.jsx';

class ThingsToDo extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
}

    render(){
      var thingsToDo = this.props.thingsToDo.map((event, index) => {
        return <Event key={index} eventImg={event.eventImg} eventCategory={event.eventCategory} eventName={event.eventName} price={event.price} ratingAvg={event.ratingAvg} numOfRatings={event.numOfRatings}/>
      })
      return(
        <div>
          <h2>Things to do near this home</h2>
          <ol>{thingsToDo}</ol>
        </div>
      )
    }
}


export default ThingsToDo;
