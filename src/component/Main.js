import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import firebase from "firebase";
import { Content, List, ListItem } from "native-base";

import { ReadingList } from "./ReadingList/";
import { Wrapper, AppHeader, LocalButton, Card, CardSection } from "./Common/";


export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      readinglist: {}
    };
  }

  componentWillMount() {
    const { currentUser } = firebase.auth();
    // firebase.database().ref(`users/${currentUser.uid}/readinglist`)
    // .on('value', snapshot => {
    //   console.log(snapshot.val());
    //   this.setState({
    //     readinglist: snapshot.val()
    //   });
    // });
    // console.log(this.state);
    console.log(currentUser);
  }

  render() {
    return (
      <Wrapper>
        <AppHeader text="Your Reading List" backButton={true} navigation={this.props.navigation} />
        <Content padder>
          <List>
            
          </List>
        </Content>
      </Wrapper>
    );
  }
}

