import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

import React, { Component } from "react";

class ListItem extends Component {
  render() {

    const { name, image, selectPlace } = this.props;

    return (
      <TouchableOpacity onPress={selectPlace}>
        <View style={styles.listItem}>
          <Image style={styles.image} source={image} />
          <Text style={styles.listItemText}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f2f2f2"
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  listItemText: {
    color: "#000",
    fontSize: 16
  }
});

export default ListItem;
