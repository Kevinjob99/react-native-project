import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const DefaultInput = props => (
  <TextInput
    style={styles.input}
    underlineColorAndroid="#013f25"
    {...props}
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