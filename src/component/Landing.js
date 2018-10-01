import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { Card, CardSection, BackgroundImage, ButtonWithIcon } from "./Common/";
import bg from "../../assets/landing_page_bg.jpeg";


class Landing extends Component {
  render() {
    return (
      <BackgroundImage src={bg}>
        <Card>
          <CardSection>
            <ButtonWithIcon iconType="Entypo" iconName="login" block={true} title="Sign In" onPressHandler={() => {
              this.props.navigation.push("Login")
            }}/>
          </CardSection>
          <CardSection>
            <ButtonWithIcon iconType="Entypo" iconName="add-user" block={true} title="Sign Up" onPressHandler={() => {
              this.props.navigation.push("SignUp")
            }}/>
          </CardSection>
        </Card>
      </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Landing;
