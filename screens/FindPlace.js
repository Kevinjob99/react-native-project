import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated
} from "react-native";
import { connect } from "react-redux";

import List from "../components/List";
import HeroImage from "../components/HeroImage";

class FindPlaceScreen extends Component {
  state = {
    placeListLoaded: false,
    removeAnimation: new Animated.Value(1),
    fadeAnimation: new Animated.Value(0)
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

  placesLoadedHandler = () => {
    Animated.timing(this.state.fadeAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }

  loadPlaceList = () => {
    Animated.timing(this.state.removeAnimation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start(() => {
      this.setState({
        placeListLoaded: true
      });
      this.placesLoadedHandler();
    });

  };

  render() {
    const { placeListLoaded } = this.state;

    return (
      <React.Fragment>
        <HeroImage />
        {!placeListLoaded && (
          <View style={styles.container}>
            <Animated.View style={{
              opacity: this.state.removeAnimation,
              transform: [
                {
                  scale: this.state.removeAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [10, 1]
                  })
                }
              ]
            }}>
              <TouchableOpacity onPress={this.loadPlaceList}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Find Places</Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          </View>
        )}

        {placeListLoaded && (
          <List
            places={this.props.places}
            selectPlace={this.selectPlaceHandler}
          />
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    borderWidth: 3,
    borderColor: "#22421D",
    borderRadius: 50,
    padding: 20
  },
  buttonText: {
    color: "#22421D",
    fontSize: 28,
    fontWeight: "bold"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(mapStateToProps)(FindPlaceScreen);
