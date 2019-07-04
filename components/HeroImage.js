import React from "react";
import { Text, ImageBackground, StyleSheet } from "react-native";

const HeroImage = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={{
        uri:
          "https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297_1280.jpg"
      }}
    >
      <Text style={styles.backgroundImageText}>My Awesome Places</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImageText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20
  }
});

export default HeroImage;
