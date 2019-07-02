import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from './ListItem';

const List = (props) => {
  return (
    <View style={styles.listContainer}>
      <ListItem
        places={props.places}
      />
    </View>
    )
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  }
})

export default List;