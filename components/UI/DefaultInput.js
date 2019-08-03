import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const DefaultInput = props => (
  <TextInput
    {...props}
    style={[styles.input, props.style, !props.valid && props.touched ? styles.invalid : null]}
  />
)

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 16,
    margin: 10
  },
  invalid: {
    borderColor: 'red',
    borderBottomWidth: 3
  }
})

export default DefaultInput;