import React, { Component } from "react";
import firebase from "react-native-firebase";

import { Loading } from "./Common/";


export default class AuthLoading extends Component {
  constructor() {
    super();
    this.checkAuthState();
  }

  checkAuthState() {
    firebase.auth().onAuthStateChanged( user => {
      this.props.navigation.navigate(user ? 'Main' : 'Landing');
    });
  }

  render() {
    return (
      <Loading />
    );
  }
}