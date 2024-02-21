import React, { useEffect } from "react";
import { useContext } from "react";

import { View, Text, Image } from "react-native";
import NavBar from "../components/navBar";
import { Colors } from "../components/colors";
import { useLocalSearchParams } from "expo-router";
import AppContext from "../components/appContext";

export default function NewsScreen() {
  const { news, setNews } = useContext(AppContext);
  const params = useLocalSearchParams();
  const { title, image, author, description, publishedAt, item } = params;

  console.log(item); // console.log({ title, image, author, description, content, publishedAt });
  return (
    <View
      style={{
        margin: 0,
        marginBottom: -30,
        flex: 1,
      }}
    >
      <NavBar />

      <View
        style={{
          flex: 0.18,
          display: "flex",
          alignItems: "center",
          marginBottom: 20,
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
              uri: image,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 0.1,
          marginTop: 30,
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            height: 80,
            marginTop: 10,
            marginBottom: 12,
            width: "100%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 0.2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                borderRadius: 10,
                width: "50%",
                height: "50%",
              }}
              source={require("../news.png")}
            ></Image>
          </View>
          <View
            style={{
              flex: 0.8,
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 12,
                marginLeft: 10,
                width: 270,

                marginTop: 5,
                fontWeight: "bold",
                color: Colors.primary,
                alignSelf: "flex-start",
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 12,
                marginLeft: 10,
                width: 270,
                fontWeight: "bold",
                color: Colors.grey,
                alignSelf: "flex-start",
              }}
            >
              {publishedAt?.split("T")[0]}{" "}
            </Text>
            <Text
              style={{
                fontFamily: "Roboto",
                fontSize: 12,
                marginLeft: 10,
                width: 270,
                fontWeight: "bold",
                color: Colors.grey,
                alignSelf: "flex-start",
              }}
            >
              {author}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          height: 1,
          backgroundColor: Colors.primary,
        }}
      ></View>
      <View
        style={{
          flex: 0.8,
          margin: 12,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            marginLeft: 10,
            fontWeight: "500",
            lineHeight: 20,
            color: Colors.black,
            alignSelf: "flex-start",
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
}
