import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text, Icon } from "native-base";


const LocalButton = props => {
  return (
    <Button style={styles.button} block={props.block} onPress={props.onPressHandler}>
      <Text style={styles.title}>
        {props.title}
      </Text>
    </Button>
  );
}

const ButtonWithIcon = props => {
  return (
    <Button iconLeft style={styles.button} block={props.block} onPress={props.onPressHandler}>
      <Icon type={props.iconType} name={props.iconName} />
      <Text style={styles.title}>
        {props.title}
      </Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f48a4b"
  },
  title: {
    color: "#ffffff"
  }
});

export { LocalButton, ButtonWithIcon };