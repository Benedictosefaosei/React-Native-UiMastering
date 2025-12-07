import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "../Components/UserAvatar";
import BackButton from "../Components/BackButton";
import { s, vs } from "react-native-size-matters";
import SendIcon from "../Components/SendIcon";
import IconCircle from "../Components/IconCircle";
import SocialBar from "../Components/SocialBar";

const ContactUsScreen = () => {
  return (
    <View
      style={{
        paddingLeft: s(15),
        paddingRight: s(15),
        paddingTop: s(40),
      }}
    >
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
      <Text style={styles.title}>Contact Us</Text>
      <View style={styles.mainBackground}>
        <Text style={styles.socialtext}>Social Media Platforms</Text>
        <View style={styles.socialbar}>
          <SocialBar />
          <SocialBar />
          <SocialBar />
          <SocialBar />
          <SocialBar />
        </View>
      </View>
    </View>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainBackground: {
    backgroundColor: "#F5F5FA",
    borderRadius: 15,
    paddingVertical: vs(20),
  },
  socialtext: {
    fontSize: 16,
    fontWeight: 600,
    marginTop: 15,
    marginLeft: 20,
  },
  socialbar: {
    marginLeft: s(18),
    marginRight: s(20),
  },
  title: {
    fontSize: s(30),
    fontWeight: 600,
    paddingLeft: s(19),
    paddingBottom: vs(22),
    paddingTop: vs(20),
  },
});
