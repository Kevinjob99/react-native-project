import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { connect } from "react-redux";

import Icon from "react-native-vector-icons/MaterialIcons";
import { deletePlace } from "../store/actions/actionCreators";

class PlaceDetailsScreen extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
  };

  componentWillMount = () => {
    Dimensions.addEventListener("change", this.updateMode);
  };

  componentWillUnmount = () => {
    Dimensions.removeEventListener("change", this.updateMode);
  };

  updateMode = () => {
    this.setState({
      viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
    });
  };

  deletePlaceHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop({
      animated: true,
      animatioType: "slide-horizontal"
    });
  };
  render() {
    const { selectedPlace } = this.props;

    return (
      <View
        style={[
          styles.modalContainer,
          this.state.viewMode === "portrait"
            ? styles.portraitModalContainer
            : styles.landscapeModalContainer
        ]}
      >
        <Image source={selectedPlace.image} style={[styles.modalImage, this.state.viewMode === 'portrait' ? styles.portraitModalImage : styles.landscapeModalImage]} />
        <View style={this.state.viewMode === 'portrait' ? styles.portraitDetailsContainer : styles.landscapeDetailsContainer}>
          <Text style={styles.modalTitle}>{selectedPlace.name}</Text>
          <View style={styles.modalButtonsContainer}>
            <TouchableOpacity onPress={this.deletePlaceHandler}>
              <View style={styles.deleteButton}>
                <Icon name="delete" size={20} color="#fff" />
                <Text style={styles.deleteButtonText}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1
  },
  portraitModalContainer: {
    flexDirection: "column"
  },
  landscapeModalContainer: {
    flexDirection: "row"
  },
  modalImage: {
    height: 200
  },
  portraitModalImage: {
    width: '100%'
  },
  landscapeModalImage: {
    width: '50%'
  },
  portraitDetailsContainer: {
    width: '100%'
  },
  landscapeDetailsContainer: {
    width: '50%'
  },
  modalTitle: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    margin: 20
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  deleteButton: {
    backgroundColor: "#22421D",
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  deleteButtonText: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  closeButton: {
    backgroundColor: "#428038",
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  closeButtonText: {
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PlaceDetailsScreen);
