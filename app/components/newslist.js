import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Colors } from "./colors";
import { router } from "expo-router";
export default function NewsList({ item, index }) {
  console.log("item", index);
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: "screens/newsScreen",
          params: {
            key: index,
            // title: item.title,
            // image: item?.urlToImage,
            // author: item?.author,
            // description: item?.description,
            // publishedAt: item?.publishedAt,
          },
        });
      }}
      style={{
        flex: 1,
        height: 80,
        width: "100%",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 0.35,
        }}
      >
        <Image
          style={{
            borderRadius: 10,
            width: 100,
            height: "100%",
          }}
          source={{
            uri: item?.urlToImage,
          }}
        />
      </View>
      <View
        style={{
          flex: 0.5,
        }}
      >
        <Text
          style={{
            flex: 1,
            fontFamily: "Roboto",
            fontSize: 12,
            // marginLeft: 40,
            marginTop: 5,
            width: 240,
            flexWrap: "wrap",

            fontWeight: "bold",
            color: Colors.black,
            alignSelf: "flex-start",
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 12,
            // marginLeft: 10,
            width: 270,
            fontWeight: "bold",
            color: Colors.grey,
            alignSelf: "flex-start",
          }}
        >
          {item.publishedAt.split("T")[0]}{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Roboto",
            fontSize: 12,
            // marginLeft: 10,
            width: 270,
            fontWeight: "bold",
            color: Colors.grey,
            alignSelf: "flex-start",
          }}
        >
          {item.author}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
