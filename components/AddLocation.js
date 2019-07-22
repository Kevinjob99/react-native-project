import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

class AddLocation extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.placeholder}>
          <Text>Map placeholder</Text>
        </View>
        <Button title="Locate me" />
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
});

export default AddLocation;
