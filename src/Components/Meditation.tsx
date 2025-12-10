import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import React, { FC } from "react";
import { s, vs } from "react-native-size-matters";
import ZoomIcon from "./ZoomIcon";

const Phonewidth = Dimensions.get("window").width;
const CardWidth = (Phonewidth - 16) / 2;

interface MeditationProp {
  imageUrl: string;
  title: string;
  date: string;
}

const Meditation: FC<MeditationProp> = ({ imageUrl, title, date }) => {
  return (
    <ImageBackground
      source={{
        uri: imageUrl,
      }}
      style={styles.container}
    >
      <View style={styles.overlay} />
      <View style={styles.liveContainer}>
        <Text style={styles.liveText}>Live</Text>
      </View>
      <View style={styles.meditationTextContainer}>
        <Text style={styles.meditationText}>{title}</Text>
      </View>
      <View style={styles.zoomContainer}>
        <ZoomIcon />
        <Text style={styles.zoomText}>{date}</Text>
      </View>
    </ImageBackground>
  );
};

export default Meditation;

const styles = StyleSheet.create({
  container: {
    width: s(166),
    height: vs(140),
    marginVertical: vs(5),
    marginHorizontal: s(5),
  },
  liveContainer: {
    position: "absolute",
    right: s(10),
    top: vs(10),
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    width: s(39),
    height: vs(22),
  },
  liveText: {
    color: "white",
    fontSize: s(11),
    fontWeight: 600,
  },
  meditationTextContainer: {
    position: "absolute",
    bottom: vs(20),
    left: s(10),
    paddingBottom: 10,
  },
  meditationText: {
    fontSize: s(12),
    fontWeight: "semibold",
    color: "white",
  },
  zoomContainer: {
    flexDirection: "row",
    position: "absolute",
    left: s(10),
    bottom: vs(10),
  },

  zoomText: {
    fontSize: s(12),
    fontWeight: 600,
    color: "white",
    marginStart: s(10),
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.60)",
  },
});
