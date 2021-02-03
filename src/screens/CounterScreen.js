import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.viewStyle}>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
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
export default CounterScreen;
