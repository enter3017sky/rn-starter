import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // Don't do this
          // counter++
          // counter = counter + 1
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current counter: {counter}</Text>
    </View>
  );
};

export default CounterScreen;
