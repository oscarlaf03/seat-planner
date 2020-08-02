import React from "react"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { List } from "semantic-ui-react";
import SeatsForm from './SeatsForm';

const GET_SEATS_REQUEST = 'GET_SEATS_REQUEST';
const GET_SEATS_SUCCESS = 'GET_SEATS_SUCCESS';

function getSeats() {
  console.log(' getSeats() Action!!');
  return dispatch => {
    dispatch({
    type: GET_SEATS_REQUEST
    });
    return fetch('v1/seats.json')
      .then(response => response.json())
      .then(json => dispatch(getSeatsSuccess(json)))
      .catch(error => console.error(error.stack))
  }
}

export function getSeatsSuccess(json){
  return {
    type: GET_SEATS_SUCCESS,
    json
  }
}
class HelloWorld extends React.Component {
  render () {
    const { seats } = this.props;
    const seatsList  = seats.map( (seat) =>{
      return(
        <div>
          <List.Item>
            <List.Icon name='arrow circle right' size ='small' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a'>{seat.name}</List.Header>
              <List.Description as='a'>{seat.guid}</List.Description>
            </List.Content>
          </List.Item>
          <SeatsForm />
        </div>
     );
    });
    return (
      <React.Fragment key={1}>
        Greeting: {this.props.greeting}
        <br />
        <button className='getSeatsBtn' onClick={ () => this.props.getSeats()}>getSeats</button>
        <List divided relaxed>{seatsList}</List>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  seats: state => state.seats,
});

const mapDispatchToProps = {getSeats };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
