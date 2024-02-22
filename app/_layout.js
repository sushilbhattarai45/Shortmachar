import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import HomeScreen from "./screens/homeScreen";
import NewsScreen from "./screens/newsScreen";
import MyFeed from "./screens/myFeedScreen";
import hitApi from "./components/hitApi";
import { Stack } from "expo-router";
import { ContextProvider } from "./components/appContext";
import { Colors } from "./components/colors";
export default function Index() {
  const { slug } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        margin: 0,
      }}
    >
      <ContextProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="screens/homeScreen" options={{}} />
          <Stack.Screen name="screens/newsScreen" options={{}} />
          <Stack.Screen name="screens/myFeedScreen" options={{}} />
          <Stack.Screen name="screens/searchScreen" options={{}} />
        </Stack>
      </ContextProvider>
    </View>
  );
}
