import React, { Component } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

import List from './components/List';

class App extends Component {

  state = {
    placeName: "",
    places: []
  };

  changeTextHandler = val => {
    this.setState({ placeName: val });
  };

  submitHandler = (e) => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.setState((prevState) => {
      return ({
        places: [...prevState.places, this.state.placeName]
      });
    })
  }

  render() {

    const { places } = this.state;

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
            onPress={this.submitHandler}
          />
        </View>
        <List
          places={places}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#F5FCFF",
    padding: 10
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

export default App;