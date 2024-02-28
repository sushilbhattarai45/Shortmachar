import React, { useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import HomeScreen from "./screens/homeScreen";
import { Colors } from "./components/colors";

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
        backgroundColor={Colors?.primary}
        style={{
          zIndex: 20,
        }}
      />
      {/* <SearchScreen /> */}
      <HomeScreen />
    </View>
  );
}
