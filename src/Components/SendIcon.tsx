import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import SendIconImage from "../assets/SendIconImage";
const SendIcon = () => {
  return (
    <View style={styles.container}>
      <SendIconImage />
    </View>
  );
};

export default SendIcon;

const styles = StyleSheet.create({
  container: {
    width: s(46),
    height: s(46),
    borderRadius: s(24),
    backgroundColor: "#1077AF",
    justifyContent: "center",
    alignItems: "center",
  },
});
