import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import HomeScreen from "./screens/home";

export default function Index() {
  const { slug } = useLocalSearchParams();

  return (
    <View>
      <Link href="/screens/home">
        <Text>hello</Text>
      </Link>
    </View>
  );
}
