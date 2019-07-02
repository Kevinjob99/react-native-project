import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem';

 class List extends Component {

  renderItem = ({item}) => {
    return (
      <ListItem
        place={item.title}
        deleteListItem={() => this.props.deleteListItem(item.key)}
      />
    )
  }

  render() {

    const { places } = this.props;

    return (
      <FlatList
        style={styles.listContainer}
        data={places}
        renderItem={this.renderItem}
      />
    )
  }
  
}

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
  }
})

export default List;