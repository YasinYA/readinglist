import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
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
import { toastError } from "../../utils/";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    }
  }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => {
        toastError(error.message);
      });
  }

  render() {  
    return (
      <Wrapper>
        <AppHeader text="Login" navigation={this.props.navigation} />
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
              <LocalButton block={true} title="Login" onPressHandler={this.handleLogin} />
            </CardSection>
            <CardSection>
              <LocalButton
                block={true}
                title="Don't have an account? Sign Up"
                onPressHandler={() => this.props.navigation.navigate('SignUp')}
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

export { Login };
