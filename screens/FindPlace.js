import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import List from '../components/List';
import HeroImage from '../components/HeroImage';

class FindPlaceScreen extends Component {
  render() {
    return (
      <View>
        <HeroImage />
        <List
          places={this.props.places}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

export default connect(mapStateToProps)(FindPlaceScreen);
