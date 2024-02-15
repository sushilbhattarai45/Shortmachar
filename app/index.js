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
        margin: 16,
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
