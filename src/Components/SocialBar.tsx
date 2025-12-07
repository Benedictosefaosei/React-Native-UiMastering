import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IconCircle from "./IconCircle";
import SendIcon from "./SendIcon";
import { s, vs } from "react-native-size-matters";

const SocialBar = () => {
  return (
    <View>
      <View style={styles.container}>
        <IconCircle />
        <Text style={styles.text}>WhatsApp</Text>
        <SendIcon />
      </View>
      <Text style={styles.text2}></Text>
    </View>
  );
};

export default SocialBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: vs(20),
  },
  text: {
    marginStart: s(15),
    flex: 1,
  },
  text2: {
    borderBottomWidth: s(1),
    borderBottomColor: "#E4E6E8",
  },
});
