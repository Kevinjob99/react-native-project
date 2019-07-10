import React, { Component } from "react";
import { Text, View, StyleSheet, Modal, Image, Button, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';

class PlaceModal extends Component {
  render() {

    const { selectedPlace, closeModal, deletePlace } = this.props;

    return (
      <Modal animationType="slide" visible={selectedPlace !== null}>
        {selectedPlace && (
          <View style={styles.modalContainer}>
            <Image source={selectedPlace.image} style={styles.modalImage} />
            <Text style={styles.modalTitle}>{selectedPlace.name}</Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity onPress={deletePlace} >
                <View style={styles.deleteButton}>
                  <Icon
                    name="delete"
                    size={20}
                    color="#fff"
                  />
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </View>
                
              </TouchableOpacity>
              
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
  },
  deleteButton: {
    backgroundColor: '#22421D',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteButtonText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
});

export default PlaceModal;
