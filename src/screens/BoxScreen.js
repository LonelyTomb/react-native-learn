import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
      <Text style={styles.textStyle}>Child #4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "green",
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 200,
  },
  textStyle: {
    borderWidth: 1,
    borderColor: "red",
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default BoxScreen;
