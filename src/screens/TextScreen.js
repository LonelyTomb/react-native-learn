import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Enter Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <Text style={styles.textStyle}>Name: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  textStyle: {
    fontSize: 30,
    marginTop: 15,
  },
  input: {
    marginTop: 10,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  spacing: {
    marginBottom: 10,
  },
});

export default TextScreen;
