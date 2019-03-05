import React from "react";
import { View } from "react-native";

import { Toolbar } from "react-native-material-ui";

const Header = props => {
  return (
    <View>
      <Toolbar
        
        style={{
          container: { backgroundColor: "#1f1f1f" }
        }}
        centerElement={props.title}
        searchable={{
          autoFocus: true,
          placeholder: "Search"
        }}
      />
    </View>
  );
};

export { Header };
