import React, { useContext } from "react";
import { View, Text, StatusBar, Image, ActivityIndicator } from "react-native";
import AppContext from "../components/appContext";
import { router } from "expo-router";
import { Colors } from "../components/colors";
import { useEffect } from "react";
export default function SplashScreen() {
  setTimeout(() => {
    router.push("screens/homeScreen", { slug: "home" });
  }, 5000);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flex: 1,
          width: 300,
          height: 300,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            marginTop: -60,
            width: 300,
            height: 300,
          }}
          source={require("../icon.png")}
        />
        <ActivityIndicator
          style={{
            position: "absolute",
            bottom: 60,
          }}
          size="medium"
          color={Colors.primary}
        />
      </View>
    </View>
  );
}
