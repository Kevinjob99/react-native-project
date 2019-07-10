import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

class NewPlaceForm extends Component {

  state = {
    placeName: ""
  };

  changeTextHandler = val => {
    this.setState({ placeName: val });
  };

  submitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    this.props.onAddedPlace(this.state.placeName);
  };

  render() {

    return (
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
          onPress={this.submitHandler}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
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

export default NewPlaceForm;
