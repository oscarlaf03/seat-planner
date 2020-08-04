import React from "react";
import { connect } from "react-redux";
class SeatsList extends React.Component {
  render() {
    return (
      <div style={{ margin: "20px" }}>
        {this.props.seat && this.props.seat.seats[0] && (
          <div>
            <h2>We found a seat </h2>
            <h3>
              your seat is: {this.props.seat.seats[0].id} at a distance of only:
              {this.props.seat.seats[0].distance} from the center of the front
              row
            </h3>
          </div>
        )}
        {this.props.seat && this.props.seat.errors && (
          <div>
            <h2>There seems to be a problem with your input </h2>
            <h3> you might want to verify: {this.props.seat.errors} </h3>
          </div>
        )}
        {this.props.seat &&
          !this.props.seat.errors &&
          !this.props.seat.seats[0] && (
            <div>
              <h2>Oh shoot all the seats are taken </h2>
              <h3>There aren't any available seats left</h3>
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  seat: state.lastAddedSeat,
});
export default connect(mapStateToProps)(SeatsList);
