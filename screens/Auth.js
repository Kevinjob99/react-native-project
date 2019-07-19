import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

import startTabs from "./startMainTabs";
import DefaultInput from '../components/UI/DefaultInput';

class AuthScreen extends Component {
  loginHandler = () => {
    startTabs();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Please signup</Text>
        <Button title="Switch to Login" />
        <View style={styles.inputContainer}>
          <DefaultInput placeholder="Your e-mail" />
          <DefaultInput placeholder="Your password" />
          <DefaultInput placeholder="Confirm password" />
        </View>
        <Button title="Login" onPress={this.loginHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: '80%'
  }
});

export default AuthScreen;
