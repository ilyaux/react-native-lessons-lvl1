import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Button } from "../uikit/Button";
import { Actions } from "react-native-router-flux";

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/img/jaam.png")} />
        <Button onPress={() => Actions.feed()}>Auth</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1F1F1F",

    justifyContent: "center",
    alignItems: "center",
    padding: 16,

    height: "100%"
  }
});

export { Login };
