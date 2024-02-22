import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { Colors } from "./colors";
export default function NavBar({ back, title, color }) {
  if (title == null) {
    title = "Read News";
  }
  if (color == null) {
    color = Colors.white;
  }
  return (
    <View
      style={{
        position: "absolute",
        display: "flex",
        flex: 1,

        flexDirection: "row",
        top: 36,
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
        <Feather
          onPress={() => router.back()}
          name="arrow-left"
          size={24}
          color={color}
        />
      </View>
      <View>
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 16,
            marginLeft: 24,
            fontWeight: "bold",
            color: color,
            alignSelf: "flex-start",
          }}
        >
          {title}{" "}
        </Text>
      </View>
    </View>
  );
}
