import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HeadingOne = props => (
  <Text
  {...props}
  style={[styles.headingOneText, props.style]}
  >
    {props.children}
  </Text>
)

const styles = StyleSheet.create({
  headingOneText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    margin: 16
  }
})

export default HeadingOne;