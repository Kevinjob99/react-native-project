import React from 'react';
import { Text } from 'react-native';

const ListItem = (props) => {
  return (
    props.places.map((place, i) => (
      <Text key={i}>{place}</Text>
    ))
  )
}

export default ListItem;