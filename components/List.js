import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './ListItem';

 class List extends Component {

  renderItem = ({item}) => {
    return (
      <ListItem 
        name={ item.name } 
        image={ item.image } 
        selectPlace={ () => this.props.selectPlace(item.key) } 
      />
    );
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