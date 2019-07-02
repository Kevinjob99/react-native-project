import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ListItem = (props) => {
  return (
    props.places.map((place, i) => (
      <View 
        key={i}
        style={styles.listItem}
      >
        <Text
          style={styles.listItemText}
        >{place}</Text>
      </View>
    ))
  )
}

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f2f2f2"
  },
  listItemText: {
    color: '#000',
    fontSize: 16
  }
});

export default ListItem;