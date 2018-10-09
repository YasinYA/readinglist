import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import SplashScreen from "react-native-splash-screen";
import { Container } from "native-base";

import firebase from 'firebase';
import { createStackNavigator, createSwitchNavigator, createDrawerNavigator } from "react-navigation";

import Landing from "./components/Landing";
import { Login, SignUp } from "./components/Auth/";
import { Create, Edit } from "./components/ReadingList/";
import { CreateReadingItem } from "./components/ReadingItem/";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import AuthLoading from "./components/AuthLoading";

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
    CreateReadingItem,
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
  constructor() {
    super();
    console.ignoredYellowBox = [
       'Setting a timer'
    ];
  }

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

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
   return (
      <Container>
        <AppRoutes />
      </Container>
    );
  }    
}

