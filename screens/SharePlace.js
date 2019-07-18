import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import NewPlaceForm from '../components/NewPlaceForm';
import { addPlace } from '../store/actions/actionCreators';

import HeroImage from '../components/HeroImage';

class SharePlaceScreen extends Component {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent)
  }
  
  onNavigatorEvent = (event) => {
    console.log(event);
    
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left',
          animated: true
        });
      }
    }
    
  }

  onAddedPlace = name => {
    this.props.onAddPlace(name);
  };

  render() {
    return (
      <View>
        <HeroImage />
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
