import React, { Component } from 'react';
import { Text, View } from 'react-native';

import NewPlaceForm from '../components/NewPlaceForm';

class SharePlaceScreen extends Component {
  render() {
    return (
      <View>
        <NewPlaceForm/>
      </View>
    )
  }
}

export default SharePlaceScreen;
