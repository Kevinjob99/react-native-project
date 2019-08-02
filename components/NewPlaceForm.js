import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import DefaultInput from "../components/UI/DefaultInput";

class NewPlaceForm extends Component {

  render() {
    return (
      <DefaultInput
        style={styles.input}
        placeholder="Add an awesome place"
        value={this.props.placeName}
        onChangeText={this.props.onChangeText}
        underlineColorAndroid="#013f25"
        autoCapitalize="words"
        autoCorrect={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    marginVertical: 16,
    marginHorizontal: 0
  }
});

export default NewPlaceForm;
