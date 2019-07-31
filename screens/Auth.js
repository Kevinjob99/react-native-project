import React, { Component } from "react";
import { View, StyleSheet, ImageBackground, Dimensions } from "react-native";

import startTabs from "./startMainTabs";
import DefaultInput from "../components/UI/DefaultInput";
import HeadingOne from "../components/UI/HeadingOne";
import backgroundImage from "../assets/hills.jpg";
import PrimaryButton from "../components/UI/PrimaryButton";
import validate from "../utility/validation";

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        },
        touched: false
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        },
        touched: false
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: "password"
        },
        touched: false
      }
    }
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateMode);
  }

  componentWillUnmount = () => {
    Dimensions.removeEventListener("change", this.updateMode);
  };

  updateMode = dims => {
    this.setState({
      viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
    });
  };

  loginHandler = () => {
    startTabs();
  };

  changeInputHandler = (key, value) => {
    let connectedValue = {};

    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;

      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === "password") {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === "password"
                ? validate(
                    prevState.controls.confirmPassword.value,
                    prevState.controls.confirmPassword.validationRules,
                    connectedValue
                  )
                : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
              value,
              prevState.controls[key].validationRules,
              connectedValue
            ),
            touched: true
          }
        }
      };
    });
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
              value={this.state.controls.email.value}
              onChangeText={value => this.changeInputHandler("email", value)}
              valid={this.state.controls.email.valid}
            />
            <View
              style={
                this.state.viewMode === "portrait"
                  ? styles.portraitPasswordContainer
                  : styles.landscapePasswordContainer
              }
            >
              <DefaultInput
                placeholder="Your password"
                placeholderTextColor="#fff"
                style={[
                  styles.input,
                  this.state.viewMode === "portrait"
                    ? styles.portraitPassword
                    : styles.landscapePassword
                ]}
                underlineColorAndroid="#fff"
                value={this.state.controls.password.value}
                onChangeText={value =>
                  this.changeInputHandler("password", value)
                }
                valid={this.state.controls.password.valid}
              />
              <DefaultInput
                placeholder="Confirm password"
                placeholderTextColor="#fff"
                style={[
                  styles.input,
                  this.state.viewMode === "portrait"
                    ? styles.portraitPassword
                    : styles.landscapePassword
                ]}
                underlineColorAndroid="#fff"
                value={this.state.controls.confirmPassword.value}
                onChangeText={value =>
                  this.changeInputHandler("confirmPassword", value)
                }
                valid={this.state.controls.confirmPassword.valid}
              />
            </View>
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
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
    padding: 20
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    padding: 10,
    color: "#fff"
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "center"
  },
  landscapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  portraitPassword: {
    width: "100%"
  },
  landscapePassword: {
    width: "48%"
  }
});

export default AuthScreen;
