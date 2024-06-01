import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, StyleSheet, Text } from "react-native";
import { fontSize, screenWidth } from "../constants/CommonStyles";

const DualProgressBar = ({ value1, value2, total }) => {
  const percentage1 = (value1 / total) * 100;
  const percentage2 = (44 / total) * 100;

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          width: screenWidth * 0.93,
          height: 20,
          alignSelf: "center",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 14,
          marginBottom: 4,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: "ProximaNovaBold",
            color: "#FFF",
          }}
        >
          ${value1}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "ProximaNovaBold",
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
            fontSize: 14,
            fontFamily: "ProximaNovaBold",
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
            { width: `${percentage1}%`, backgroundColor: "#3B9781",borderRadius: 5, zIndex:99 },
          ]}
        />
        <View
          style={[
            styles.progressBar,
            { width: `${percentage2}%`, backgroundColor: "#FFF" , borderTopRightRadius:5, borderBottomRightRadius:5 , marginLeft:-3},
          ]}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 12,
    width: screenWidth * 0.93,
    backgroundColor: "rgba(224, 224, 224, 0.5)",
    borderRadius: 5,
    overflow: "hidden",
    alignSelf: "center",
    marginBottom: 8
  },
  progressBar: {
    height: "100%",
  },
});

export default DualProgressBar;
