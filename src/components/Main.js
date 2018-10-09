import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { Content, List, ListItem } from "native-base";

import { ReadingList } from "./ReadingList/";
import { Wrapper, AppHeader, LocalButton, Card, CardSection } from "./Common/";


export default class Main extends Component {
  render() {
    return (
      <Wrapper>
        <AppHeader text="Your Reading List" backButton={true} navigation={this.props.navigation} />
        <Content padder>
          <ReadingList navigation={this.props.navigation} />
        </Content>
      </Wrapper>
    );
  }
}

