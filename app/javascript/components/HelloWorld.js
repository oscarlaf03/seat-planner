import React from "react"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
const GET_SEATS_REQUEST = 'GET_SEATS_REQUEST';

function getSeats() {
  console.log(' getSeats() Action!!');
  return {
    type: GET_SEATS_REQUEST
  }
}

import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment key={1}>
        Greeting: {this.props.greeting}
        <button className='getSeatsBtn' onClick={ () => this.props.getSeats()}>getSeats</button>
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
