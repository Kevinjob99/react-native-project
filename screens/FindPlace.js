import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import List from "../components/List";
import HeroImage from "../components/HeroImage";

class FindPlaceScreen extends Component {
  state = {
    placeListLoaded: false
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left",
          animated: true
        });
      }
    }
  };

  selectPlaceHandler = key => {
    const selected = this.props.places.find(place => {
      return place.key === key;
    });

    this.props.navigator.push({
      screen: "my-awesome-places.PlaceDetailsScreen",
      title: selected.name,
      passProps: {
        selectedPlace: selected
      }
    });
  };
  render() {
    const { placeListLoaded } = this.state;

    return (
      <View>
        <HeroImage />
        {!placeListLoaded && (
          <View style={styles.container}>
            <TouchableOpacity>
              <View>
                <Text>Find Places</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {/* <List
          places={this.props.places}
          selectPlace={this.selectPlaceHandler}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(mapStateToProps)(FindPlaceScreen);
