import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import firebase from "firebase";
import { Content, Form, Toast } from "native-base";
import {
  Wrapper,
  InputField,
  CardSection,
  LocalButton,
  AppHeader,
  Heading 
} from "../Common/";


class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => this.props.navigation.navigate('Main'))
      .catch(error => Toast.show({ text: error.message, type: "danger" }));
  }

  render() {
    return (
      <Wrapper>
        <AppHeader text="Sign Up" navigation={this.props.navigation} />
        <Content padder contentContainerStyle={{ 
          justifyContent: 'center', 
          flex: 1,
        }}>
          <Form>
            <CardSection>
              <InputField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
                label="Email"
              />

              <InputField
                secureTextEntry
                label="Password"
                autoCapitalize="none"
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                last={true}
              />
            </CardSection>
            <CardSection>
              <LocalButton block={true} title="Sign Up" onPressHandler={this.handleSignUp} />
            </CardSection>
            <CardSection>
              <LocalButton
              block={true}
              title="Already have an account? Login"
              onPressHandler={() => this.props.navigation.navigate('Login')}
            />
            </CardSection>
          </Form>
        </Content>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  errorText: {
    color: "red"
  }
});

export { SignUp };
