import React from "react"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
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

// import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    const { seats } = this.props;
    const seatsList  = seats.map( (seat) =>{
    return <li>{seat.name}*---*{seat.guid}</li>
    });
    return (
      <React.Fragment key={1}>
        Greeting: {this.props.greeting}
        <br />
        <button className='getSeatsBtn' onClick={ () => this.props.getSeats()}>getSeats</button>
        <br />
        <ul> {seatsList} </ul>

      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  seats: state => state.seats,
});

const mapDispatchToProps = {getSeats };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);

// HelloWorld.propTypes = {
//   greeting: PropTypes.string
// };
// export default HelloWorld
