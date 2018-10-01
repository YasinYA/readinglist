import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { Container } from "native-base";

import firebase from 'firebase';
import { createStackNavigator, createSwitchNavigator, createDrawerNavigator } from "react-navigation";

import Landing from "./component/Landing";
import { Login, SignUp } from "./component/Auth/";
import { Create, Edit } from "./component/ReadingList/";
import Main from "./component/Main";
import SideBar from "./component/SideBar";
import AuthLoading from "./component/AuthLoading";

const AuthRoutes = createStackNavigator(
    {
      Landing,
      SignUp,
      Login
    },
    {
      headerMode: "none"
    }
);

const MainRoutes = createDrawerNavigator(
  {
    Main,
    Create,
    Edit,
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

const AppRoutes = createSwitchNavigator(
  {
    AuthLoading,
    Auth: AuthRoutes,
    Main: MainRoutes
  },
  {
      initialRouteName: 'AuthLoading',
  }
);

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBXkKHO1RksqaNo-Rfr0Evl8mDTy3-Vnkg",
      authDomain: "readinglist-ab343.firebaseapp.com",
      databaseURL: "https://readinglist-ab343.firebaseio.com",
      projectId: "readinglist-ab343",
      storageBucket: "",
      messagingSenderId: "27200520956"
    });
  }

  render() {
   return (
      <Container>
        <AppRoutes />
      </Container>
    );
  }    
}

