import React, { Component } from 'react'
import { Text, View, StyleSheet, Modal, Image, Button } from 'react-native'

class PlaceModal extends Component {

  render() {
    return (
      <Modal
        animationType="slide"
        visible={this.props.modalVisible}
      >
        <View style={styles.modalContainer}>
          <Image source={this.props.image} style={styles.modalImage} />
          <Text>{this.props.title}</Text>
          <View>
            <Button title="Delete" />
            <Button title="Close" />
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1
  },
  modalImage: {
    width: '100%',
    height: 200
  }
})

export default PlaceModal;
