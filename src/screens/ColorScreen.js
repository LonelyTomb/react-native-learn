import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);
  return (
    <View style={styles.viewStyle}>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: item,
                marginTop: 10,
                marginRight: 10
              }}
            />
          );
        }}
      ></FlatList>
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
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
export default ColorScreen;
