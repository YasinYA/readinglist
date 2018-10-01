import React from "react";
import { Container } from "native-base";

const Wrapper = props => (
  <Container>
    {props.children}
  </Container>
);

export { Wrapper };