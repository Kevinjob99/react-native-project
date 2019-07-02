import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = (props) => {
  return (
      <TouchableOpacity onPress={props.deleteListItem}>
        <View 
          style={styles.listItem}
        >
          <Image
            style={styles.image}
            source={props.image}
          />
          <Text
            style={styles.listItemText}
          >{props.place}</Text>
        </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: "100%",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f2f2f2"
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  listItemText: {
    color: '#000',
    fontSize: 16
  }
});

export default ListItem;