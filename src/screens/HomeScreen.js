import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

import router from "../../src/router";

console.log('router:" ', router);

const HomeScreen = ({ navigation }) => {
  console.log(router);
  return (
    <View>
      <Text style={styles.text}>Hi There!!</Text>

      {Object.entries(router).map(([routerName]) => (
        <Button
          key={routerName}
          title={`Go to ${routerName} Demo`}
          onPress={() => {
            navigation.navigate(routerName);
          }}
        />
      ))}

      {/* <Button
        title="Go to Components Demo"
        onPress={() => {
          navigation.navigate("Components");
        }}
      />
      <Button
        title="Go to Components Demo"
        onPress={() => {
          navigation.navigate("Components");
        }}
      />
      <Button
        title="Go to Components Demo"
        onPress={() => {
          navigation.navigate("Components");
        }}
      /> */}

      {/* <TouchableOpacity
        onPress={() => {
          console.log("TouchableOpacity");
        }}
      >
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

/**

<Button
  title="Go to Components Demo"
  onPress={() => {
    console.log("Button ");

    // navigation.navigate == router.push('Components')
    // 還會有退後按鈕 <
    navigation.navigate("Components");
  }}
/>



Object {
  "navigation": Object {
    "actions": Object {
      "dismiss": [Function dismiss],
      "goBack": [Function goBack],
      "navigate": [Function navigate],
      "pop": [Function pop],
      "popToTop": [Function popToTop],
      "push": [Function push],
      "replace": [Function replace],
      "reset": [Function reset],
      "setParams": [Function setParams],
    },
    "addListener": [Function addListener],
    "dangerouslyGetParent": [Function anonymous],
    "dismiss": [Function anonymous],
    "dispatch": [Function anonymous],
    "emit": [Function emit],
    "getChildNavigation": [Function getChildNavigation],
    "getParam": [Function anonymous],
    "getScreenProps": [Function anonymous],
    "goBack": [Function anonymous],
    "isFirstRouteInParent": [Function isFirstRouteInParent],
    "isFocused": [Function isFocused],

    "navigate": [Function anonymous],

    "pop": [Function anonymous],
    "popToTop": [Function anonymous],
    "push": [Function anonymous],
    "replace": [Function anonymous],
    "reset": [Function anonymous],
    "router": undefined,
    "setParams": [Function anonymous],
    "state": Object {
      "key": "id-1625505192971-0",
      "routeName": "Home",
    },
  },
  "screenProps": undefined,
}
 */
