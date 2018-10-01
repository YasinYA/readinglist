import React from "react";
import { AppRegistry, ImageBackground, StatusBar, StyleSheet } from "react-native";
import { Container, Content, Text, Icon, Left, Body, List, ListItem, Button } from "native-base";
import firebase from 'firebase';
import { User } from "./Common/";
import bg from "../../assets/landing_page_bg.jpeg";

const routes = ["Create", "Edit"];

export default class SideBar extends React.Component {
  
  logout() {
    firebase.auth().signOut().then(() => this.props.navigation.navigate('Landing'));
  }

  render() {
    const currentUser = firebase.auth().currentUser;
    return (
      <Container>
        <Content>
          <ImageBackground
            source={bg}
            style={{
              height: 220,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <User user={currentUser} />
          </ImageBackground>
          <List>
            <ListItem itemDivider>
              <Text>Reading List</Text>
            </ListItem>
            <ListItem
              button
              onPress={() => this.props.navigation.navigate("Create")}>
              <Left>
                <Button transparent>
                  <Icon type="MaterialIcons" name="playlist-add"  style={styles.icon} />
                </Button>
              </Left>
              <Body>
                <Text style={styles.text}>Create</Text>
              </Body>
            </ListItem>
            <ListItem itemDivider>
              <Text>Account</Text>
            </ListItem>
            <ListItem
              button
              onPress={this.logout.bind(this)}>
              <Left>
                <Button transparent>
                  <Icon name="log-out"  style={styles.icon} />
                </Button>
              </Left>
              <Body>
                <Text style={styles.text}>Logout</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    color: "#f75802"
  },
  text: {
    textAlign: "left"
  }
});