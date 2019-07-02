import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = (props) => {
  return (
    props.places.map((place, i) => (
      <TouchableOpacity key={i} onPress={() => alert('Touched ' + place + ' id: ' + i)}>
        <View 
          style={styles.listItem}
        >
          <Text
            style={styles.listItemText}
          >{place}</Text>
        </View>
      </TouchableOpacity>
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