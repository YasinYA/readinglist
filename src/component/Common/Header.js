import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header, Left, Body, Right, Button, Icon, Title } from "native-base";


const AppHeader = props => {
  const button = props.backButton ? false : true
  return (
    <Header style={styles.headerbg} androidStatusBarColor="#f75802">
      {
        button ?
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()} >
            <Icon name='arrow-back' />
          </Button>
        </Left>
        :
        <Left>
          <Button
            transparent
            onPress={() => props.navigation.openDrawer()}>
            <Icon name="menu" />
          </Button>
        </Left>
      }
      <Body>
        <Title>{props.text}</Title>
      </Body>
    </Header>
  );
}

const styles = StyleSheet.create({
  headerbg: {
    backgroundColor: "#f75802"
  }
});

export { AppHeader };