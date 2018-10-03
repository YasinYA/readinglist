import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Content, Form, DatePicker, Button } from "native-base";
import {
  Wrapper,
  AppHeader,
  CardSection,
  Heading,
  InputField,
  LocalButton
} from "../Common/";


class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      label: "",
      deadLine: new Date()
    };

    this.createReadingList = this.createReadingList.bind(this);
  }

  createReadingList() {
    const { currentUser } = firebase.auth();
    const { name, label, deadLine } = this.state;
    const data = { name, label, deadLine: deadLine.toLocaleString() };

    // database call
    firebase.database().ref(`users/${currentUser.uid}/readinglist`)
    .push(data)
    .then( result => {
      this.props.navigation.navigate("Main");
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <Wrapper>
        <AppHeader text="Create Reading List" navigation={this.props.navigation} />
        <Content padder contentContainerStyle={{ 
          justifyContent: 'center', 
          flex: 1,
        }}>
          <Form>
            <CardSection>
              <InputField
                autoCapitalize="none"
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
                label="Name"
              />
              <InputField
                autoCapitalize="none"
                onChangeText={label => this.setState({ label })}
                value={this.state.label}
                label="Label"
              />
            </CardSection>
            <CardSection>
              <Button bordered warning block>
                <DatePicker
                  defaultDate={new Date()}
                  minimumDate={new Date()}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Select Deadline Date"
                  textStyle={{ color: "#555" }}
                  placeHolderTextStyle={{ color: "#555" }}
                  onDateChange={deadLine => this.setState({ deadLine })}
                />
              </Button>
            </CardSection>
            <CardSection>
              <LocalButton block={true} title="Create" onPressHandler={this.createReadingList} />
            </CardSection>
          </Form>
        </Content>
      </Wrapper>
    );
  }
}

export { Create };