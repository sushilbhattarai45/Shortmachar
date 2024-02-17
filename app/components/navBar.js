import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Colors } from "./colors";
export default function NavBar() {
  return (
    <View
      style={{
        position: "absolute",
        display: "flex",
        flex: 1,

        flexDirection: "row",
        top: 2,
        left: 12,
        zIndex: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* <Link href="./homeScreen"> */}
        <Feather name="arrow-left" size={24} color="white" />
        {/* </Link> */}
      </View>
      <View>
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 16,
            marginLeft: 24,
            fontWeight: "bold",
            color: Colors.white,
            alignSelf: "flex-start",
          }}
        >
          Read News
        </Text>
      </View>
    </View>
  );
}
