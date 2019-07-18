import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet } from 'react-native'

class SideDrawerScreen extends Component {
  render() {
    return (
      <View style={[styles.drawerContainer, {width: Dimensions.get('window').width * 0.8}]}>
        <Text>SideDrawer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  }
});

export default SideDrawerScreen;