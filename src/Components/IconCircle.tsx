import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";

const IconCircle = () => {
  return <View style={styles.container}></View>;
};

export default IconCircle;

const styles = StyleSheet.create({
  container: {
    width: s(46),
    height: s(46),
    borderRadius: s(24),
    borderColor: "#E4E6E8",
    borderWidth: 1,
  },
});
