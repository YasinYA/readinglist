import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";
import { Content, Form, DatePicker, Button } from "native-base";
import { ColorPicker, toHsv, fromHsv } from 'react-native-color-picker';
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
      labelColor: toHsv("orange"),
      deadLine: new Date()
    };

    this.createReadingList = this.createReadingList.bind(this);
  }

  createReadingList() {
    const { currentUser } = firebase.auth();
    const { name, label, deadLine, labelColor } = this.state;
    const data = { name, label, deadLine: deadLine.toLocaleString(), labelColor };

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
          <CardSection>
            <InputField
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
              label="Name"
            />
            <InputField
              onChangeText={label => this.setState({ label })}
              value={this.state.label}
              label="Label"
            />
          </CardSection>
          <View style={{flex: 1, padding: 15, backgroundColor: '#212021', marginBottom: 30}}>
            <Text style={{color: 'white'}}>Pick a label color</Text>
            <ColorPicker
              oldColor='purple'
              color={this.state.labelColor}
              onColorChange={labelColor => this.setState({ labelColor: fromHsv(labelColor) })}
              style={{flex: 1}}
            />
          </View>
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
        </Content>
      </Wrapper>
    );
  }
}

export { Create };