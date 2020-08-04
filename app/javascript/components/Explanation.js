import React from "react";
import { Header } from "semantic-ui-react";

const formatExample = {
  venue: {
    layout: {
      rows: 10,
      columns: 50,
    },
  },
  seats: {
    a1: {
      id: "a1",
      row: "a",
      column: 1,
      status: "AVAILABLE",
    },
    b5: {
      id: "b5",
      row: "b",
      column: 5,
      status: "TAKEN",
    },
  },
};

class Explanation extends React.Component {
  render() {
    return (
      <div >
        <Header as="h2">Best available seat</Header>
        <p>or</p>
        <Header as="h3">Where would Euclid seat?</Header>
        <p>
          Around the year 300 BC in Alexandria, a man named Euclid gifted the
          world with the revolutionary notion of geometry, including a simple an
          efective way to measure the distnace between two points in a plain.
        </p>
        <p>
          Now, more than two thousand years later, thanks to the power of
          supercomputers and the internet we can make use of Euclid's genius
          observations and deductions to the find the seat that is closes to
          middle of the front row of a concert venue.
        </p>
        <p>
          You are required to input in the field below the venue and seats
          information in the following format:
        </p>
        <p> {JSON.stringify(formatExample)}</p>
        <p>
          Note that only declared seats are considered and that a seats with an
          "status" other than "AVAILABLE" are ignored
        </p>
      </div>
    );
  }
}

export default Explanation;
