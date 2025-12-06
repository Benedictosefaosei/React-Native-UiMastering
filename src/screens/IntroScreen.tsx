import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FoodLogo from "../assets/FoodLogo";

const IntroScreen = () => {
  return (
    <View>
      <FoodLogo style={{ marginTop: 50 }} />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({});
