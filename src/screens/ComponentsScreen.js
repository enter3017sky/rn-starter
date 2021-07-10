import React from "react";

import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.subHeaderStyle}>This is the components screen</Text>
      <Text style={styles.textStyle}>Hi There!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
