import React from "react";
import { View, Text, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { Colors } from "./colors";
export default function NavBar({ title, color }) {
  return (
    <View
      style={{
        width: "100%",
        position: "absolute",
        display: "flex",
        backgroundColor: Colors.black,
        padding: 16,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,

        flex: 1,
        flexDirection: "row",
        zIndex: 20,
      }}
    >
      <View
        style={{
          display: "flex",

          flexDirection: "row",
        }}
      >
        <Feather
          onPress={() => router.back()}
          name="arrow-left"
          size={24}
          color={Colors.white}
        />
      </View>
      <View>
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 16,
            marginLeft: 24,
            fontWeight: "bold",
            color: Colors.white,
            alignSelf: "flex-start",
          }}
        >
          {title}{" "}
        </Text>
      </View>
    </View>
  );
}
