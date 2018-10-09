import React, { Component } from "react";
import { View, Text } from "react-native";
import firebase from "firebase";
import { Content, Form, DatePicker, Button, Toast } from "native-base";
import { ColorPicker, toHsv, fromHsv } from 'react-native-color-picker';
import {
  Wrapper,
  AppHeader,
  CardSection,
  Heading,
  InputField,
  LocalButton
} from "../Common/";
import { primaryDateFormat } from "../../utils/";


class Edit extends Component {
  constructor(props) {
    super(props);
    this.item = props.navigation.getParam('item', {});
    this.state = {
      name: this.item.name,
      label: this.item.label,
      labelColor: toHsv(this.item.labelColor),
      deadLine: new Date(this.item.deadLine),
      uid: this.item.uid
    };

    this.editReadingList = this.editReadingList.bind(this);
  }

  editReadingList() {
    const { currentUser } = firebase.auth();
    const { name, label, deadLine, labelColor, uid} = this.state;
    const data = { name, label, deadLine: deadLine.toLocaleString(), labelColor };

    // database call
    firebase.database().ref(`users/${currentUser.uid}/readinglist/${uid}`)
    .set(data)
    .then( result => {
      this.props.navigation.navigate("Main");
    })
    .catch(err => {
      Toast.show({
        text: err.message,
        type: "danger"
      });
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
                placeHolderText={primaryDateFormat(this.state.deadLine.toLocaleString())}
                textStyle={{ color: "#555" }}
                placeHolderTextStyle={{ color: "#555" }}
                onDateChange={deadLine => this.setState({ deadLine })}
              />
            </Button>
          </CardSection>
          <CardSection>
            <LocalButton block={true} title="Save" onPressHandler={this.editReadingList} />
          </CardSection>
        </Content>
      </Wrapper>
    );
  }
}

export { Edit };