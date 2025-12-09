import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import TopTabs from "../Components/TopTabs";

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Meditations</Text>
      <Text style={styles.subTitle}>Lorem Ipsum is simply dummy text</Text>
      <TopTabs />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: vs(50),
    marginHorizontal: s(10),
  },
  titleText: {
    fontSize: s(20),
    fontWeight: 600,
  },
  subTitle: {
    fontSize: s(14),
    fontWeight: 400,
    paddingTop: vs(10),
  },
});
