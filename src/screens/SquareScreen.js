import React, { useState } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(`rgb(${red}, ${green}, ${blue})`);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change < 255 && red + change > 0 && setRed(red + change);
        break;
      case "green":
        green + change < 255 && green + change > 0 && setGreen(green + change);
        break;
      case "blue":
        blue + change < 255 && blue + change > 0 && setBlue(blue + change);
        break;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      ></ColorCounter>
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        color="Green"
      ></ColorCounter>
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        color="Blue"
      ></ColorCounter>

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styled = StyleSheet.create({});

export default SquareScreen;
