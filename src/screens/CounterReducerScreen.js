import React, { useReducer } from "react";
import { Button, Text, View } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase_count":
      return { ...state, count: state.count + 1 };
    case "decrease_count":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increase_count" });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrease_count" });
        }}
      />
      <Text>Current count: {count}</Text>
    </View>
  );
};

export default CounterScreen;
