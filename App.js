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
        <View style={styles.inputContainer}> 
          <TextInput 
            style={styles.input}
            placeholder="Add an awesome place"
            value={this.state.placeName}
            onChangeText={this.changeTextHandler}
            underlineColorAndroid="#013f25"
          />
          <Button 
            style={styles.buttonAdd}
            title="Add"
            color="#013f25"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#F5FCFF",
    padding: 10
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
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  input: {
    width: "70%"
  },
  buttonAdd: {
    width: "30%"
  }
});
