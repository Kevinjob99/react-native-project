import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import HeroImage from './components/HeroImage';
import List from "./components/List";
import NewPlaceForm from "./components/NewPlaceForm";
import PlaceholderImage from "./assets/placeholder-image.jpg";
import PlaceModal from "./components/PlaceModal";

class App extends Component {
  state = {
    placeName: "",
    places: [],
    selectedPlace: null
  };

  changeTextHandler = val => {
    this.setState({ placeName: val });
  };

  submitHandler = e => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: [
          ...prevState.places,
          { key: Math.random().toString(), 
            title: this.state.placeName,
            image: PlaceholderImage
          }
        ]
      };
    });
  };

  selectPlace = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      }
    })
  }

  closeModal = () => {
    this.setState({ selectedPlace: null });
  }

  deletePlace = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      }
    })
  }

  render() {
    const { places, placeName, selectedPlace } = this.state;

    return (
      <View style={styles.container}>
        <PlaceModal
          selectedPlace={selectedPlace}
          closeModal={this.closeModal}
          deletePlace={this.deletePlace}
        />
        <HeroImage />
        <NewPlaceForm
          placeName={placeName}
          changeTextHandler={this.changeTextHandler}
          submitHandler={this.submitHandler}
        />
        <List 
          places={places}
          selectPlace={this.selectPlace} 
        />
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 10
  }
});

export default App;
