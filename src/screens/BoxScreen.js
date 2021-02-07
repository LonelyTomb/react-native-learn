import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "green",
    height: 200,
  },
  textOneStyle: {
    borderWidth: 1,
    borderColor: "red",
    ...StyleSheet.absoluteFillObject
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    fontSize: 18,
  },
  textThreeStyle: {
    borderWidth: 1,
    borderColor: "red",
  },
});

export default BoxScreen;
