import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const BackgroundImage = props => (
  <ImageBackground source={props.src} resizeMode="cover" style={styles.backgroundImage}>
    {props.children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%"
  }
})

export { BackgroundImage };