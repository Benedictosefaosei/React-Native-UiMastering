import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { s } from "react-native-size-matters";

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Entypo name="chevron-left" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: s(32),
    height: s(32),
    borderRadius: s(16),
    backgroundColor: "#ECF0F4",
  },
});
