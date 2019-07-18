import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';
import AuthScreen from "./screens/Auth";
import SharePlaceScreen from "./screens/SharePlace";
import FindPlaceScreen from "./screens/FindPlace";
import PlaceDetailsScreen from './screens/PlaceDetails';
import configureStore from './store/store';
import SideDrawerScreen from "./screens/SideDrawer";

const store = configureStore();

Navigation.registerComponent(
  "my-awesome-places.AuthScreen", 
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "my-awesome-places.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "my-awesome-places.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'my-awesome-places.PlaceDetailsScreen',
  () => PlaceDetailsScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'my-awesome-places.SideDrawerScreen',
  () => SideDrawerScreen
);

Navigation.startSingleScreenApp({
  screen: {
    screen: "my-awesome-places.AuthScreen",
    title: "Login",
    store,
    Provider
  }
});

// import React, { Component } from "react";
// import { StyleSheet, View } from "react-native";
// import { connect } from "react-redux";

// import HeroImage from "./components/HeroImage";
// import List from "./components/List";
// import NewPlaceForm from "./components/NewPlaceForm";
// import PlaceModal from "./components/PlaceModal";
// import {
//   addPlace,
//   deletePlace,
//   selectPlace,
//   deselectPlace
// } from "./store/actions/actionCreators";

// class App extends Component {
//   onAddedPlace = name => {
//     this.props.onAddPlace(name);
//   };

//   selectPlace = key => {
//     this.props.onSelectPlace(key);
//   };

//   closeModal = () => {
//     this.props.onDeselectPlace();
//   };

//   deletePlace = () => {
//     this.props.onDeletePlace();
//   };

//   render() {
//     const { places, selectedPlace } = this.props;

//     return (
//       <View style={styles.container}>
//         <PlaceModal
//           selectedPlace={selectedPlace}
//           closeModal={this.closeModal}
//           deletePlace={this.deletePlace}
//         />
//         <HeroImage />
//         <NewPlaceForm onAddedPlace={this.onAddedPlace} />
//         <List places={places} selectPlace={this.selectPlace} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF",
//     padding: 10
//   }
// });

// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: name => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: key => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace())
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
