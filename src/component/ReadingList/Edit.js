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


class Edit extends Component {
  constructor(props) {
    super(props);
    this.item = props.navigation.getParam('item', {});
    this.state = {
      name: this.item.name,
      label: this.item.label,
      deadLine: new Date(this.item.deadLine),
      uid: this.item.uid
    };

    this.editReadingList = this.editReadingList.bind(this);
  }

  editReadingList() {
    const { currentUser } = firebase.auth();
    const { name, label, deadLine, uid} = this.state;
    const data = { name, label, deadLine: deadLine.toLocaleString() };

    // database call
    firebase.database().ref(`users/${currentUser.uid}/readinglist/${uid}`)
    .set(data)
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
        <AppHeader text="Edit Reading List" navigation={this.props.navigation} />
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
                  placeHolderText={this.state.deadLine.toLocaleString()}
                  textStyle={{ color: "#555" }}
                  placeHolderTextStyle={{ color: "#555" }}
                  onDateChange={deadLine => this.setState({ deadLine })}
                />
              </Button>
            </CardSection>
            <CardSection>
              <LocalButton block={true} title="Save" onPressHandler={this.editReadingList} />
            </CardSection>
          </Form>
        </Content>
      </Wrapper>
    );
  }
}

export { Edit };