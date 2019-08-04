import React, { Component } from "react";
import { Text, View, Button, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";
import { Marker } from 'react-native-maps';

class AddLocation extends Component {

  state = {
    focusedRegion: {
      latitude: 53.1256049,
      longitude: 17.8981004,
      latitudeDelta: 0.1,
      longitudeDelta:
        (Dimensions.get("window").width / Dimensions.get("window").height) *
        0.1
    },
    locationSelected: false
  };

  pickLocationHandler = (event) => {
    const coords = event.nativeEvent.coordinate;
    this.map.animateToRegion({
      ...this.state.focusedRegion,
      latitude: coords.latitude,
      longitude: coords.longitude
    });
    this.setState(prevState => {
      return {
        focusedRegion: {
          ...prevState.focusedRegion,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        locationSelected: true
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <MapView
          style={styles.map}
          initialRegion={this.state.focusedRegion}
          onPress={this.pickLocationHandler}
          ref={map => this.map = map}
        >
          {this.state.locationSelected &&
          <Marker 
            coordinate={this.state.focusedRegion} />
          }
        </MapView>
        <Button title="Locate me" />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: 200,
    marginTop: 16,
    marginBottom: 16
  }
});

export default AddLocation;
