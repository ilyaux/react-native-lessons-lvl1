import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Login, Feed  } from "./src/components/screens/";
import { ImageProfile } from './src/components/uikit/'
import { Router, Scene } from "react-native-router-flux";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} hideNavBar={true} />

          <Scene key="feed" component={Feed} hideNavBar={true} initial />

          <Scene key="ImageProfile" component={ImageProfile} hideNavBar={true} />
        </Scene>
      </Router>
    );
  }
}
