/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, TextInput, View, Button } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  state = {
    placeName: ""
  };

  changeTextHandler = val => {
    this.setState({ placeName: val });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          placeholder="Add an awesome place"
          value={this.state.placeName}
          onChangeText={this.changeTextHandler}
        />
        <Button style={styles.buttonAdd}
          title="Add"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  input: {
    width: "70%",
    borderColor: "#5f5f5f",
    borderWidth: 2,
    padding: 10,
    fontSize: 16
  },
  buttonAdd: {
    width: "30%",
    padding: 10,
    fontSize: 16
  }
});
