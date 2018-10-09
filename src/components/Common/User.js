import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";

const User = props => (
  <View style={styles.container}>
    <Icon type="FontAwesome" name='user-circle-o' style={styles.icon} />
    <Text style={styles.text}>Hi, {props.user.email}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    color: "#ffffff",
    fontSize: 50,
    marginBottom: 15
  },
  text: {
    color: "#ffffff",
  }
});


export { User };