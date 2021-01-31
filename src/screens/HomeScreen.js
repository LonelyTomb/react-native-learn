import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text}>Hello</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => {
          navigation.navigate("Components");
        }}
        style={styles.buttonStyle}
      />
      <Button
        title="Go to Lists Demo"
        onPress={() => {
          navigation.navigate("List");
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
    marginVertical: 10,
  },
});

export default HomeScreen;
