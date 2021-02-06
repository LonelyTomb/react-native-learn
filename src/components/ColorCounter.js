import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View style={styles.viewStyle}>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    marginVertical: 10,
  },
});

export default ColorCounter;
