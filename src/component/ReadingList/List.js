import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "react-native-firebase";
import { List, ListItem } from "native-base";

import {
  Heading
} from "../Common/";

class ReadingList extends Component {
  
  componentDidMount() {
    console.log(this.props.data);
  }

  render() {
    const list = [...this.props.data]; 
    return (
      <View>
        <List>
          {
            list.map((item, key) => (
              <ListItem key={key}>
                <Text>{item.name}</Text>
              </ListItem>
            ))
          }
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export { ReadingList };
