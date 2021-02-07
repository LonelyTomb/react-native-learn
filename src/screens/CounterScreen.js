import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "update_count":
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View style={styles.viewStyle}>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "update_count", payload: counter + 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "update_count", payload: counter - 1 });
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
