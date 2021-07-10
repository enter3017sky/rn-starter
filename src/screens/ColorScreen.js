import React, { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const handleAddColor = () => {
    setColors([...colors, randomRgb()]);
  };
  return (
    <View>
      <Button title="Add a Color" onPress={handleAddColor} />

      {/* {colors.map((color) => (
        <View style={{ height: 100, width: 100, backgroundColor: color }} />
      ))} */}

      {/* 可以滾動的列表 */}
      <FlatList
        // 每一個 key
        keyExtractor={(item) => item}
        // data 來源
        data={colors}
        // 每個子項
        renderItem={({ item }) => (
          <View style={{ height: 100, width: 100, backgroundColor: item }} />
        )}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
