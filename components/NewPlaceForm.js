import React from 'react';
import { StyleSheet, View, TextInput, Button } from "react-native";

const NewPlaceForm = (props) => {
  return (
    <View style={styles.inputContainer}> 
          <TextInput 
            style={styles.input}
            placeholder="Add an awesome place"
            value={props.placeName}
            onChangeText={props.changeTextHandler}
            underlineColorAndroid="#013f25"
          />
          <Button 
            style={styles.buttonAdd}
            title="Add"
            color="#013f25"
            onPress={props.submitHandler}
          />
        </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  input: {
    width: "70%"
  },
  buttonAdd: {
    width: "30%"
  }
});

export default NewPlaceForm;
