import React, { Component } from "react";
import {
  View,
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";

import { addPlace } from "../store/actions/actionCreators";
import HeroImage from "../components/HeroImage";
import HeadingOne from "../components/UI/HeadingOne";
import AddImage from "../components/AddImage";
import AddLocation from "../components/AddLocation";
import NewPlaceForm from "../components/NewPlaceForm";
import PrimaryButton from "../components/UI/PrimaryButton";

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }
  state = {
    controls: {
      placeName: {
        value: "",
        valid: false,
        minLength: 1,
        touched: false
      },
      location: {
        value: null,
        valid: false
      }
    }
  };

  changeTextHandler = val => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          placeName: {
            ...prevState.controls.placeName,
            value: val,
            valid:
              this.state.controls.placeName.value.length >=
              this.state.controls.placeName.minLength
                ? true
                : false,
            touched: true
          }
        }
      };
    });
  };

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

  submitHandler = () => {
    this.props.onAddPlace(
      this.state.controls.placeName.value,
      this.state.controls.location.value
    );
  };

  locationPickedHandler = location => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          location: {
            value: location,
            valid: true
          }
        }
      };
    });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="position" style={{ flex: 1 }}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <HeroImage />
              <View style={styles.container}>
                <HeadingOne>Add new place!</HeadingOne>
                <AddImage />
                <AddLocation locationPicked={this.locationPickedHandler} />
                <NewPlaceForm
                  placeName={this.state.controls.placeName.value}
                  onChangeText={this.changeTextHandler}
                  valid={this.state.controls.placeName.valid}
                  touched={this.state.controls.placeName.touched}
                />
                <PrimaryButton
                  onPress={this.submitHandler}
                  disabled={
                    !this.state.controls.placeName.valid ||
                    !this.state.controls.location.valid
                  }
                >
                  Add new place
                </PrimaryButton>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
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
    onAddPlace: (name, location) => dispatch(addPlace(name, location))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SharePlaceScreen);
