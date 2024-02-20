import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import HomeScreen from "./screens/homeScreen";
import NewsScreen from "./screens/newsScreen";
import MyFeed from "./screens/myFeedScreen";
import hitApi from "./components/hitApi";
import { ContextProvider } from "./components/appContext";
export default function Index() {
  const { slug } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ContextProvider>
        <HomeScreen />
      </ContextProvider>
    </View>
  );
}
