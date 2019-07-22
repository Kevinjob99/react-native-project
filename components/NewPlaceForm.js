import React, { Component } from "react";
import { StyleSheet, View, Button } from "react-native";
import DefaultInput from "../components/UI/DefaultInput";

class NewPlaceForm extends Component {
  state = {
    placeName: ""
  };

  changeTextHandler = val => {
    this.setState({ placeName: val });
  };

  // submitHandler = () => {
  //   if (this.state.placeName.trim() === "") {
  //     return;
  //   }
  //   this.props.onAddedPlace(this.state.placeName);
  // };

  render() {
    return (
      <DefaultInput
        style={styles.input}
        placeholder="Add an awesome place"
        value={this.state.placeName}
        onChangeText={this.changeTextHandler}
        underlineColorAndroid="#013f25"
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
