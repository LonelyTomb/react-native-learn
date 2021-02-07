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
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100
  },
  textOneStyle: {
    borderWidth: 1,
    backgroundColor: "red",
    padding:5,
    height: 50,
    width: 50,
  },
  textTwoStyle: {
    borderWidth: 3,
    backgroundColor: "green",
    padding:5,
    // top: 50,
    alignSelf: 'flex-end',
    height: 50,
    width: 50,
  },
  textThreeStyle: {
    borderWidth: 1,
    backgroundColor: "purple",
    padding:5,
    height: 50,
    width: 50,
  },
});

export default BoxScreen;
