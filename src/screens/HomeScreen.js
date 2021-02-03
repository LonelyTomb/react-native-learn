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

      <Button
        title="Go to Counter Scren"
        onPress={() => {
          navigation.navigate("Counter");
        }}
        style={styles.buttonStyle}
      />

      <Button
        title="View Images"
        onPress={() => {
          navigation.navigate("Images");
        }}
        style={styles.buttonStyle}
      />

      <Button
        title="View Colors"
        onPress={() => {
          navigation.navigate("Color");
        }}
        style={styles.buttonStyle}
        color="red"
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
    margin: 20,
    padding: 20
  },
});

export default HomeScreen;
