import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";

import { addPlace } from "../store/actions/actionCreators";
import HeroImage from "../components/HeroImage";

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    console.log(event);

    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left",
          animated: true
        });
      }
    }
  };

  onAddedPlace = name => {
    this.props.onAddPlace(name);
  };

  render() {
    return (
      <ScrollView>
        <View>
          <HeroImage />
          <View style={styles.container}>
            <Text style={styles.heading}>Add new place!</Text>
            <View style={styles.placeholder}>
              <Text>Image placeholder</Text>
            </View>
            <Button title="Select an image" />
            <View style={styles.placeholder}>
              <Text>Map placeholder</Text>
            </View>
            <Button title="Locate me" />
            <TextInput placeholder="Place name" underlineColorAndroid="#000" />
            <Button title="Add new place" />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    justifyContent: "center"
  },
  heading: {
    textAlign: "center",
    fontSize: 28,
    color: "#000",
    margin: 16
  },
  placeholder: {
    width: "100%",
    height: 150,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 16
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SharePlaceScreen);
