import React, { useContext } from "react";
import { View, Text, StatusBar, Image, ActivityIndicator } from "react-native";
import AppContext from "../components/appContext";
import { router } from "expo-router";
import { Colors } from "../components/colors";
export default function SplashScreen() {
  const { news, setNews, chooseData } = useContext(AppContext);
  if (news?.articles && chooseData?.articles) {
    router.push("screens/homeScreen", { slug: "home" });
  }
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
