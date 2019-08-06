import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import ImagePicker from 'react-native-image-picker';

class AddImage extends Component {

  state = {
    pickedImage: null
  }

  pickImageHandler = () => {
    ImagePicker.showImagePicker({title: 'Show an image picker'}, res => {
      if (res.didCancel) {
        console.log('User cancelled');
      }
      else if (res.error) {
        console.log('Error occured', res.error);
      }
      else {
        this.setState({
          pickedImage: {uri: res.uri}
        })
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <View style={styles.placeholder}>
          <Text>Image placeholder</Text>
        </View>
        <Button title="Select an image" onPress={this.pickImageHandler} />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
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
})

export default AddImage;
