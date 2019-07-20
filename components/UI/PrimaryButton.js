import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const PrimaryButton = (props) => (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.button, props.style]}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: '#142711',
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default PrimaryButton;
