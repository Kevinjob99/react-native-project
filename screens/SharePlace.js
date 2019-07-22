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
      <View>
        <HeroImage />
        <ScrollView>
          <View>
            <Text>Share a place!</Text>
            <View>
              <Text>Image placeholder</Text>
            </View>
            <Button title="Select an image" />
            <View>
              <Text>Map placeholder</Text>
            </View>
            <Button title="Locate me" />
            <TextInput placeholder="Place name" />
            <Button title="Add new place" />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SharePlaceScreen);
