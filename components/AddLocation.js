import React, { Component } from "react";
import { Text, View, Button, StyleSheet, Dimensions } from "react-native";
import MapView from "react-native-maps";

class AddLocation extends Component {
  state = {
    initialRegion: {
      latitude: 53.1256049,
      longitude: 17.8981004,
      latitudeDelta: 0.1,
      longitudeDelta:
        (Dimensions.get("window").width / Dimensions.get("window").height) *
        0.1
    }
  };
  render() {
    return (
      <React.Fragment>
        <MapView
          style={styles.map}
          initialRegion={this.state.initialRegion}
        />
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
