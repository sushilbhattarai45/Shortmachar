import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Link } from "expo-router";
export default function HomeScreen() {
  const { slug } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "blue",
      }}
    >
      <View
        style={{
          display: "flex",
          flex: 1,
          backgroundColor: "red",

          flexDirection: "column",
        }}
      >
        <Text>Hello</Text>
        <Text>Hello</Text>
      </View>
    </View>
  );
}
