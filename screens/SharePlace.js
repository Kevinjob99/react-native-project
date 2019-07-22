import React, { Component } from "react";
import {
  View,
  Button,
  ScrollView,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";

import { addPlace } from "../store/actions/actionCreators";
import HeroImage from "../components/HeroImage";
import HeadingOne from '../components/UI/HeadingOne';
import AddImage from "../components/AddImage";
import AddLocation from "../components/AddLocation";
import NewPlaceForm from '../components/NewPlaceForm';

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
            <HeadingOne>Add new place!</HeadingOne>
            <AddImage />
            <AddLocation />
            <NewPlaceForm />
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
