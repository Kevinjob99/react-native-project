import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

import startTabs from "./startMainTabs";

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
          <TextInput placeholder="Your e-mail" style={styles.input} />
          <TextInput placeholder="Your password" style={styles.input} />
          <TextInput placeholder="Confirm password" style={styles.input} />
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
  },
  input: {
    width: "100%"
  }
});

export default AuthScreen;
