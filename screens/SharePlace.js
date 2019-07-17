import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import NewPlaceForm from '../components/NewPlaceForm';
import { addPlace } from '../store/actions/actionCreators';

class SharePlaceScreen extends Component {

  onAddedPlace = name => {
    this.props.onAddPlace(name);
  };

  render() {
    return (
      <View>
        <NewPlaceForm
          onAddedPlace={this.onAddedPlace}
        />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name))
  }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
