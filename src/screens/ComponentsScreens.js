import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreens = () => {
  const name = "V";
  return (
    <View>
      <Text style={styles.header}>Greeting started with react native</Text>
      <Text style={styles.subHeader}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 45,
  },
  subHeader: {
    fontSize: 20,
  },
});

export default ComponentsScreens;
