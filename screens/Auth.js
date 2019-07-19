import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

import startTabs from "./startMainTabs";
import DefaultInput from '../components/UI/DefaultInput';
import HeadingOne from '../components/UI/HeadingOne';

class AuthScreen extends Component {
  loginHandler = () => {
    startTabs();
  };

  render() {
    return (
      <View style={styles.container}>
        <HeadingOne style={styles.headingText}>Please signup</HeadingOne>
        <Button title="Switch to Login" />
        <View style={styles.inputContainer}>
          <DefaultInput placeholder="Your e-mail" style={styles.input} />
          <DefaultInput placeholder="Your password" style={styles.input} />
          <DefaultInput placeholder="Confirm password" style={styles.input} />
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
  headingText: {
    marginBottom: 16
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    padding: 10
  }
});

export default AuthScreen;
