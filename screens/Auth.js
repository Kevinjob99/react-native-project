import React, { Component } from "react";
import { View, Button, StyleSheet, ImageBackground } from "react-native";

import startTabs from "./startMainTabs";
import DefaultInput from "../components/UI/DefaultInput";
import HeadingOne from "../components/UI/HeadingOne";
import backgroundImage from "../assets/hills.jpg";
import PrimaryButton from '../components/UI/PrimaryButton';

class AuthScreen extends Component {
  loginHandler = () => {
    startTabs();
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <HeadingOne style={styles.headingText}>Please signup</HeadingOne>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Your e-mail"
              placeholderTextColor="#fff"
              style={styles.input}
              underlineColorAndroid="#fff"
            />
            <DefaultInput
              placeholder="Your password"
              placeholderTextColor="#fff"
              style={styles.input}
              underlineColorAndroid="#fff"
            />
            <DefaultInput
              placeholder="Confirm password"
              placeholderTextColor="#fff"
              style={styles.input}
              underlineColorAndroid="#fff"
            />
          </View>
          <View style={styles.buttonsContainer}>
            <PrimaryButton>Switch to Login</PrimaryButton>
            <PrimaryButton onPress={this.loginHandler}>Submit</PrimaryButton>
          </View>
        </View>
      </ImageBackground>
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
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  headingText: {
    marginBottom: 16
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    padding: 20
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    padding: 10,
    color: "#fff"
  }
});

export default AuthScreen;
