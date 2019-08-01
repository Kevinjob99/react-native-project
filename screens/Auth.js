import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { connect } from "react-redux";

import startTabs from "./startMainTabs";
import DefaultInput from "../components/UI/DefaultInput";
import HeadingOne from "../components/UI/HeadingOne";
import backgroundImage from "../assets/hills.jpg";
import PrimaryButton from "../components/UI/PrimaryButton";
import validate from "../utility/validation";
import { tryAuth } from "../store/actions/actionCreators";

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
    authMode: "login",
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
    const authData = {
      email: this.state.controls.email.value,
      password: this.state.controls.password.value
    };
    this.props.onSubmitForm(authData);
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

  switchAuthMode = () => {
    this.setState(prevState => {
      return {
        authMode: prevState.authMode === "login" ? "signup" : "login"
      };
    });
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <HeadingOne style={styles.headingText}>
              Please {this.state.authMode === "login" ? "Sign in" : "Sign up"}
            </HeadingOne>
            <View style={styles.inputContainer}>
              <DefaultInput
                placeholder="Your e-mail"
                placeholderTextColor="#fff"
                style={styles.input}
                underlineColorAndroid="#fff"
                value={this.state.controls.email.value}
                onChangeText={value => this.changeInputHandler("email", value)}
                valid={this.state.controls.email.valid}
                touched={this.state.controls.email.touched}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
              />
              <View
                style={
                  this.state.viewMode === "portrait" ||
                  this.state.authMode === "login"
                    ? styles.portraitPasswordContainer
                    : styles.landscapePasswordContainer
                }
              >
                <DefaultInput
                  placeholder="Your password"
                  placeholderTextColor="#fff"
                  style={[
                    styles.input,
                    this.state.viewMode === "portrait" ||
                    this.state.authMode === "login"
                      ? styles.portraitPassword
                      : styles.landscapePassword
                  ]}
                  underlineColorAndroid="#fff"
                  value={this.state.controls.password.value}
                  onChangeText={value =>
                    this.changeInputHandler("password", value)
                  }
                  valid={this.state.controls.password.valid}
                  touched={this.state.controls.password.touched}
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                />

                {this.state.authMode === "signup" && (
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
                    touched={this.state.controls.confirmPassword.touched}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                  />
                )}
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <PrimaryButton onPress={this.switchAuthMode}>
                Switch to{" "}
                {this.state.authMode === "login" ? "Sign up" : "Login"}
              </PrimaryButton>
              <PrimaryButton
                onPress={this.loginHandler}
                disabled={
                  !this.state.controls.email.valid ||
                  !this.state.controls.password.valid ||
                  (!this.state.controls.confirmPassword.valid &&
                    this.state.authMode === "signup")
                }
              >
                Submit
              </PrimaryButton>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
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

const mapDispatchToProps = dispatch => {
  return {
    onSubmitForm: authData => dispatch(tryAuth(authData))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AuthScreen);
