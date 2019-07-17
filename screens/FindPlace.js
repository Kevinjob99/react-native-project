import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import List from '../components/List';
import HeroImage from '../components/HeroImage';

class FindPlaceScreen extends Component {

  selectPlaceHandler = key => {

    const selected = this.props.places.find(place => {
      return place.key === key;
    })

    this.props.navigator.push({
      screen: 'my-awesome-places.PlaceDetailsScreen',
      title: selected.name,
      passProps: {
        selectedPlace: selected
      }
    });
  }
  render() {
    return (
      <View>
        <HeroImage />
        <List
          places={this.props.places}
          selectPlace={this.selectPlaceHandler}
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
