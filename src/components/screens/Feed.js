import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Header, Label, ImageCard, BottomNav } from "../uikit";

const url ="https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json";

class Feed extends React.Component {
  state = {
    title: " Jaam App ",
    data: []
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data });
    } catch (e) {
      throw e;
    }
  };

  render() {
    const { title , data } = this.state
    return (
      <View style={styles.Feed}>
        <View style={styles.Header}>
          <Header  title = { title }/>
          <Label />
          <ScrollView>
            <View style={styles.ImageCard}>
            { data.map(item => ( <ImageCard data={item} key={item.id} /> ))}
            </View>
          </ScrollView>
        </View>

        <BottomNav style={styles.BottonNav} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Feed: {
    backgroundColor: "#1f1f1f",
    height: "100%"
  },

  Header: {
    marginTop: 24
  },
  ImageCard: {
    marginBottom: 170
  }
});

export { Feed };
