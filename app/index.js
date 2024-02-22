import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import HomeScreen from "./screens/homeScreen";
import NewsScreen from "./screens/newsScreen";
import { router } from "expo-router";
export default function Index() {
  //   useEffect(() => {
  //     router.push("screens/homeScreen", { slug: "home" });
  //   }, []);
  const { slug } = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        margin: 10,
      }}
    >
      <HomeScreen />
    </View>
  );
}
