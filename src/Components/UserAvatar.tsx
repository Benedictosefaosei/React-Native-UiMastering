import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { s } from "react-native-size-matters";

const UserAvatar = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80",
        }}
        style={styles.container}
      />
    </View>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  container: {
    width: s(32),
    height: s(32),
    borderRadius: s(16),
  },
});
