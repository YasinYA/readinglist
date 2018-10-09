import _ from "lodash";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "firebase";
import { List, ListItem, Left, Right, Icon, Body, Button, Badge } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Loading } from "../Common/";
import { primaryDateFormat } from "../../utils/";

import {
  Heading
} from "../Common/";

class ReadingList extends Component {

  constructor() {
    super();
    this.state = {
      readinglist: [],
      loading: true
    };
    this._isMounted = false
    this.currentUser = firebase.auth().currentUser;
  }


  componentDidMount() {
    this._isMounted = true;
    this.getData();
  }

  deleteReadingList(uid) {
    firebase.database().ref(`users/${this.currentUser.uid}/readinglist/${uid}`)
    .remove()
    .then(() => this.props.navigation.navigate("Main"));
  }

  async getData() {
    const ref = firebase.database().ref(`users/${this.currentUser.uid}/readinglist`);
    await ref.on('value', snapshot => {
      const readinglist = _.map(snapshot.val(), (val, uid) => ({...val, uid}));
      if(this._isMounted){
        this.setState({
          readinglist: readinglist,
          loading: false
        });
      }
    });
  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  render() {
    return (
      <View>
        {
          this.state.loading
          ?
          <Loading />
          :
          <List>
            {
              this.state.readinglist.map((item, key) => (
                <ListItem key={key}>
                  <Body>
                    <Grid>
                      <Col>
                        <Text style={styles.name}>{item.name}</Text>
                      </Col>
                      <Col>
                        <Badge style={{backgroundColor:item.labelColor, paddingTop: 4}}>
                          <Text style={styles.badgeText}>{item.label}</Text>
                        </Badge>
                      </Col>
                    </Grid>
                    <Text style={styles.deadLine}>Deadline: {primaryDateFormat(item.deadLine)}</Text>
                  </Body>
                  <Right>
                    <Icon type="FontAwesome" name="edit" style={{color: "#333"}} onPress={() => {
                      this.props.navigation.navigate("Edit", {item:item})
                    }} />
                  </Right>
                  <Right>
                    <Icon type="Octicons" style={styles.trashIcon} onPress={() => this.deleteReadingList(item.uid)} name="trashcan" />
                  </Right>
                </ListItem>
              ))
            }
          </List>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  badgeText: {
    fontSize: 12
  },
  deadLine: {
    fontSize: 12,
    marginTop: 10
  },
  name: {
    color: "#333",
    fontSize: 18
  },
  trashIcon: {
    color: "#e50b0b"
  }
});

export { ReadingList };
