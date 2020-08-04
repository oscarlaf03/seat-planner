import React from "react";
import { Container } from "semantic-ui-react";
import Explanation from "./Explanation";
import SeatsForm from "./SeatsForm";

class MainComponent extends React.Component {
  render() {
    return (
      <Container textAlign="center" style={{ paddingTop: "5%" }}>
        <Explanation />
        <SeatsForm />
      </Container>
    );
  }
}

export default MainComponent;
