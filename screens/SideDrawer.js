import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class SideDrawerScreen extends Component {
  render() {
    return (
      <View
        style={[
          styles.drawerContainer,
          { width: Dimensions.get("window").width * 0.8 }
        ]}
      >
        <TouchableOpacity>
          <View style={styles.itemContainer}>
            <View style={styles.icon}>
              <Icon name="logout-variant" size={30} color="#000" />
            </View>
            <Text style={styles.text}>Sign out</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#f2f2f2',
    padding: 10
  },
  icon: {
    width: "15%"
  },
  text: {
    fontSize: 16
  }
});

export default SideDrawerScreen;
