import React from "react";
import PropTypes from "prop-types";
import { View, Image, StyleSheet } from "react-native";
import { Avatar, Card, ListItem, COLOR } from "react-native-material-ui";
import Container from "./Container";
import { Actions } from "react-native-router-flux";

const ImageCard = ({ data }) => {
  const { image, name, year } = data;
  return (
      
    <Container >
      <Card>
        <ListItem
          style={{
            primaryText: { color: "#fff" },
            container: { backgroundColor: "#1f1f1f" },
            secondaryText: { color: "#fff" },
            rightElement: { color: COLOR.white }
          }}
          leftElement={<Avatar />}
          centerElement={{
            primaryText: name,
            secondaryText: year
          }}
          rightElement={{
            actions: ["star"]
          }}
        />
        <View style={styles.Container}>
          <Image style={styles.Image} source={{ uri: image }} />
        </View>
      </Card>
    </Container>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#1f1f1f"
  },

  Image: {
    height: 250,
    width: "100%"
  },
  Button: {
    width: 75,
    height: 35,
    backgroundColor: "#1f1f1f"
  }
});

export { ImageCard };
