import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <ImageDetail
        style={styles.spacing}
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score={2}
      />
      <ImageDetail
        style={styles.spacing}
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score={4}
      />
      <ImageDetail
        style={styles.spacing}
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score={5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  text: {
    fontSize: 30,
    marginTop: 15,
  },
  spacing: {
    marginBottom: 10,
  },
});
export default ImageScreen;
