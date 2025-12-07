import { StyleSheet, Text, View } from "react-native";
import React from "react";
import UserAvatar from "../Components/UserAvatar";
import BackButton from "../Components/BackButton";
import { s, vs } from "react-native-size-matters";
import SocialBar from "../Components/SocialBar";

import { FontAwesome, Entypo, AntDesign } from "@expo/vector-icons";

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
          <SocialBar
            icon={<FontAwesome name="whatsapp" size={30} color="#178AD9" />}
            title="WhatsApp"
          />
          <SocialBar
            icon={
              <Entypo name="facebook-with-circle" size={30} color="#178AD9" />
            }
            title="FaceBook"
          />
          <SocialBar
            icon={<Entypo name="instagram" size={30} color="#178AD9" />}
            title="Instagram"
          />
          <SocialBar
            icon={<AntDesign name="twitter" size={30} color="#178AD9" />}
            title="Twitter"
          />
          <SocialBar
            icon={
              <Entypo name="linkedin-with-circle" size={30} color="#178AD9" />
            }
            title="LinkedIn"
          />
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
