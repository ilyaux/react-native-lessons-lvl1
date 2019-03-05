import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const ImageProfile = props => {
  const { image, name, year } = data;

  return (
    <View>
      <Image style={styles.Image} source={{ uri: image }}/>
      <Text> { name} </Text>
      <Text> { year} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    width: "100%",
    height: 250
  }
});

export { ImageProfile };
