import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import TopTabs from "../Components/TopTabs";
import Meditation from "../Components/Meditation";
import { dummyData } from "../../Data/data";

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Meditations</Text>
      <Text style={styles.subTitle}>Lorem Ipsum is simply dummy text</Text>
      <TopTabs />

      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Meditation
            imageUrl={item.image}
            title={item.title}
            date={item.date}
          />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: vs(200),
        }}
      />
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
