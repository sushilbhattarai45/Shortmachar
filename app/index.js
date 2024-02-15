import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import HomeScreen from "./screens/homeScreen";
import NewsScreen from "./screens/newsScreen";

export default function Index() {
  const { slug } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <HomeScreen />
    </View>
  );
}
