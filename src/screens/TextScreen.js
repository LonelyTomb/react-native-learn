import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      {password && password.length <= 5 ? (
        <Text style={styles.textStyle}>Password must be longer than 5</Text>
      ) : null}
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
