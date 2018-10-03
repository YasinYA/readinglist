import React, { Component } from "react";
import firebase from "firebase";

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