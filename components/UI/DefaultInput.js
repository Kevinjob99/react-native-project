import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const DefaultInput = props => (
  <TextInput
    underlineColorAndroid="#013f25"
    {...props}
    style={[styles.input, props.style]}

  />
)

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 16,
    margin: 10
  }
})

export default DefaultInput;