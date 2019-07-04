import React, { Component } from "react";
import { Text, View, StyleSheet, Modal, Image, Button } from "react-native";

class PlaceModal extends Component {
  render() {

    const { selectedPlace, closeModal } = this.props;

    return (
      <Modal animationType="slide" visible={selectedPlace !== null}>
        {selectedPlace && (
          <View style={styles.modalContainer}>
            <Image source={selectedPlace.image} style={styles.modalImage} />
            <Text style={styles.modalTitle}>{selectedPlace.title}</Text>
            <View style={styles.modalButtonsContainer}>
              <Button title="Delete" color="#22421D" />
              <Button title="Close" color="#428038" onPress={closeModal} />
            </View>
          </View>
        )}
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1
  },
  modalImage: {
    width: "100%",
    height: 200
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    margin: 20
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

export default PlaceModal;
