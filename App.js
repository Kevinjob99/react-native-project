import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import List from './components/List';
import NewPlaceForm from './components/NewPlaceForm';

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
        places: [...prevState.places, {key: Math.random(), title: this.state.placeName }]
      });
    })
  }

  deleteListItem = (key) => {

    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== key;
        })
      }
    });
  }

  render() {

    const { places, placeName } = this.state;

    return (
      <View style={styles.container}>
        <NewPlaceForm
          placeName={placeName}
          changeTextHandler={this.changeTextHandler}
          submitHandler={this.submitHandler}
        />
        <List
          places={places}
          deleteListItem={this.deleteListItem}
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
  }
});

export default App;