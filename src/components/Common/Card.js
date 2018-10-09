import React from 'react';
import { View } from 'react-native';

const Card = props => (
  <View style={styles.container}>
    {props.children}
  </View>
);

const styles = {
  container: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%"
  }
};

export { Card };
