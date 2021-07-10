import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// 解構 props
const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  // const [colors, setColors] = useState([]);
  // console.log("onIncrease, onDecrease ", onIncrease, onDecrease);

  return (
    <View>
      <Text>{color}</Text>
      {/* 傳入修改父層值的方法 */}
      <Button onPress={onIncrease} title={`Increase ${color}`} />
      <Button onPress={onDecrease} title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
