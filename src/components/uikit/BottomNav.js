import React, { Component } from "react";
import { View, Text } from "react-native";
import { BottomNavigation, COLOR } from "react-native-material-ui";

class BottomNav extends Component {
  constructor(props) {
    super(props);

    this.state = { active: "today" };
  }
  componentWillUpdate;

  render() {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 0,
          marginRight: 16,
          justifyContent: "center",
          width: "100%"
        }}                                               
      >
        <BottomNavigation
          hidden={true}
          active={this.state.active}
          style={{ container: { backgroundColor: "#1f1f1f" } }}
        >
          <BottomNavigation.Action
            style={{ icon: { color: "#464646" } }}
            key="today"
            icon="today"
            label="Today"
            onPress={() => this.setState({ active: "today" })}
          />

          <BottomNavigation.Action
            style={{ icon: { color: "#464646" } }}
            key="bookmark-border"
            icon="bookmark-border"
            label="Bookmark"
            onPress={() => this.setState({ active: "bookmark-border" })}
          />
          <BottomNavigation.Action
            style={{ icon: { color: "#464646" } }}
            key="settings"
            icon="settings"
            label="Settings"
            onPress={() => this.setState({ active: "settings" })}
          />
        </BottomNavigation>
      </View>
    );
  }
}

export { BottomNav };
