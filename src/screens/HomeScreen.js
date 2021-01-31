import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text}>Hello</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => {
          console.log("Pressed!");
        }}
        style={styles.buttonStyle}
      />
      <TouchableOpacity
        onPress={() => {
          console.log("Touched!");
        }}
      >
        <Text style={styles.buttonStyle}>Go to List Demo</Text>
      </TouchableOpacity>
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
  buttonStyle: {
    marginVertical: 10,
  },
});

export default HomeScreen;
