import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, imageSource }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Source - {imageSource}</Text>
    </View>
  );
};

const styled = StyleSheet.create({});

export default ImageDetail;
