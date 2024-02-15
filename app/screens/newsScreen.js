import React from "react";
import { View, Text, Image } from "react-native";
import NavBar from "../components/navBar";
import { Colors } from "../components/colors";
export default function NewsScreen() {
  return (
    <View
      style={{
        margin: 12,
        marginBottom: -30,
        flex: 1,
      }}
    >
      <NavBar />

      <View
        style={{
          flex: 0.4,
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View style={{}}>
          <Image
            style={{
              width: "100%",
              aspectRatio: 16 / 9,
              resizeMode: "contain",
            }}
            source={{
              uri: "https://cdn.hashnode.com/res/hashnode/image/upload/v1707582038715/706edfe1-8154-4fec-b6fc-573de32adcd5.png",
            }}
          />
        </View>
      </View>
    </View>
  );
}
