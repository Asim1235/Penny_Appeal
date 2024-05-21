import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, StyleSheet, Text } from "react-native";
import { fontSize, screenWidth } from "../constants/CommonStyles";

const DualProgressBar = ({ value1, value2, total }) => {
  const percentage1 = (value1 / total) * 100;
  const percentage2 = (value2 / total) * 100;

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          width: screenWidth * 0.9,
          height: 20,
          alignSelf: "center",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: fontSize.verbiage_16,
            fontFamily: "GreySansSemiBold",
            color: "#FFF",
          }}
        >
          ${value1}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: fontSize.verbiage_16,
              fontFamily: "GreySansSemiBold",
              color: "#FFF",
            }}
          >
            {"2024 donation goal"}
          </Text>
          <Ionicons
            name={"information-circle"}
            size={20}
            color={"#FFF"}
            style={{ marginLeft: 0.0075 * screenWidth }}
          />
        </View>
        <Text
          style={{
            fontSize: fontSize.verbiage_16,
            fontFamily: "GreySansSemiBold",
            color: "#FFF",
          }}
        >
          ${total}
        </Text>
      </View>
      <View style={styles.container}>
        <View
          style={[
            styles.progressBar,
            { width: `${percentage1}%`, backgroundColor: "#3B9781" },
          ]}
        />
        <View
          style={[
            styles.progressBar,
            { width: `${percentage2}%`, backgroundColor: "#FFF" },
          ]}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 10,
    width: screenWidth * 0.9,
    backgroundColor: "rgba(224, 224, 224, 0.5)",
    borderRadius: 5,
    overflow: "hidden",
    alignSelf: "center",
  },
  progressBar: {
    height: "100%",
  },
});

export default DualProgressBar;
