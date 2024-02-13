import React from "react";
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Link } from "expo-router";
export default function HomeScreen() {
  const { slug } = useLocalSearchParams();

  return (
    <View>
      <Text>hello</Text>
    </View>
  );
}
