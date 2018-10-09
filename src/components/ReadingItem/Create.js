import React, { Component } from "react";
import { View, Text } from "react-native";
import { Content, Toast } from "native-base";
import {
  Wrapper,
  AppHeader
} from "../Common/";
import { toastError } from "../../utils/";


class CreateReadingItem extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      type: "",
    };
  }

  createReadingList() {
    const { currentUser } = firebase.auth();
    const { name, type } = this.state;
    const data = { name, type };

    // database call
    firebase.database().ref(`users/${currentUser.uid}/readinglist/items/`)
    .push(data)
    .then( result => {
      this.props.navigation.navigate("Main");
    })
    .catch(error => {
      toastError(error.message)
    });
  }

  render() {
    return (
      <Wrapper>
        <AppHeader text="Create Reading Item" navigation={this.props.navigation} />
        <Content padder contentContainerStyle={{ 
          justifyContent: 'center', 
          flex: 1,
        }}>
          <CardSection>
            <InputField
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
              label="Name"
            />
            <InputField
              onChangeText={type => this.setState({ type })}
              value={this.state.type}
              label="Type"
            />
          </CardSection>
          <CardSection>
            <LocalButton block={true} title="Create" onPressHandler={this.createReadingList} />
          </CardSection>
        </Content>
      </Wrapper>
    );
  }
}

export { CreateReadingItem };