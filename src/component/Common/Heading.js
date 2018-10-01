import React from "react";
import { StyleSheet } from "react-native";
import { H1 } from "native-base";

const Heading = props => (
  <H1 style={styles.header}>{props.text}</H1>
);

const styles = StyleSheet.create({
  header: {
    color: "#666",
    textAlign: "center"
  }
});

export { Heading };