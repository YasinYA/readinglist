import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import firebase from "react-native-firebase";
import { Content, Form, H1 } from "native-base";
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
      password: '',
      errorMessage: null
    }
  }

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }));
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
            {
              this.state.errorMessage &&
                <Text style={styles.errorText}>
                  {this.state.errorMessage}
                </Text>
            }
            <CardSection>
              <InputField
                autoCapitalize="none"
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
