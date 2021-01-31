import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

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
    marginVertical: 50,
  },
});

export default HomeScreen;
