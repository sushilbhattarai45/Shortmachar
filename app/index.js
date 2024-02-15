import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import HomeScreen from "./screens/homeScreen";

export default function Index() {
  const { slug } = useLocalSearchParams();

  return (
    <View
      style={{
        margin: 24,
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HomeScreen />
    </View>
  );
}