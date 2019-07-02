import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = (props) => {
  return (
      <TouchableOpacity onPress={props.deleteListItem}>
        <View 
          style={styles.listItem}
          key={props.i}
        >
          <Text
            style={styles.listItemText}
          >{props.place}</Text>
        </View>
      </TouchableOpacity>
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