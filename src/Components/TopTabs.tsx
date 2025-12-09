import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { s, vs } from "react-native-size-matters";

const tabArray = ["Live", "Recorded"];

const TopTabs = () => {
  const [activeTab, setActiveTab] = useState("Live");
  return (
    <View style={styles.mainContainer}>
      {tabArray.map((tabName) => {
        return (
          <TouchableOpacity
            style={[styles.tabButton, activeTab === tabName && styles.isActive]}
            onPress={() => setActiveTab(tabName)}
          >
            <Text style={styles.textStyle}>{tabName}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: vs(10),
    backgroundColor: "#F5F5F4",
    marginTop: vs(10),
    flexDirection: "row",
  },
  tabButton: {
    paddingVertical: vs(5),
    paddingHorizontal: s(5),
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: s(5),
  },
  textStyle: {
    fontWeight: 600,
    fontSize: s(14),
  },
  isActive: {
    backgroundColor: "#75563B",
    color: "#fff",
  },
});
