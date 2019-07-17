import React, { Component } from 'react';
import { Text, View } from 'react-native';

import List from '../components/List';

class FindPlaceScreen extends Component {
  render() {
    return (
      <View>
        <List
          places={this.props.places}
        />
      </View>
    )
  }
}

export default FindPlaceScreen;
