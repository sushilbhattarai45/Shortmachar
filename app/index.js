import React, { useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import HomeScreen from "./screens/homeScreen";
import { Colors } from "./components/colors";
import SplashScreen from "./screens/splashScreen";
export default function Index() {
  //   useEffect(() => {
  //     router.push("screens/homeScreen", { slug: "home" });
  //   }, []);
  const { slug } = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <StatusBar
        animated={true}
        backgroundColor="black"
        style={{
          zIndex: 20,
        }}
      />
      <SplashScreen />
    </View>
  );
}
