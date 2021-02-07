import React, { useReducer } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View style={styles.viewStyle}>
      <ColorCounter
        onIncrease={() =>
          dispatch({ payload: COLOR_INCREMENT, type: "change_red" })
        }
        onDecrease={() =>
          dispatch({ payload: -1 * COLOR_INCREMENT, type: "change_red" })
        }
        color={"Red"}
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ payload: COLOR_INCREMENT, type: "change_green" })
        }
        onDecrease={() =>
          dispatch({ payload: -1 * COLOR_INCREMENT, type: "change_green" })
        }
        color={"Green"}
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ payload: COLOR_INCREMENT, type: "change_blue" })
        }
        onDecrease={() =>
          dispatch({ payload: -1 * COLOR_INCREMENT, type: "change_blue" })
        }
        color={"Blue"}
      />
      <Text>
        RGB: ({red},{green},{blue})
      </Text>
      <View
        style={{
          height: 300,
          width: 300,
          marginTop: 10,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
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

export default SquareScreen;
