import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  StatusBar,
} from "react-native";
import NavBar from "../components/navBar";
import { Colors } from "../components/colors";
import { useRouter } from "expo-router";
import AppContext from "../components/appContext";
import { Ionicons } from "@expo/vector-icons";
import { Linking } from "react-native";

export default function MyFeed() {
  const { news, setNews } = React.useContext(AppContext);
  const [data, setData] = useState([]); // changed from {} to []
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const flatListRef = useRef(); // new useRef
  const router = useRouter(); // added router

  useEffect(() => {
    setData(news?.articles);
  }, []);

  const renderItem = ({ item, index }) => {
    if (item.urlToImage != null && !item.description.includes("…")) {
      return (
        <View
          style={{
            width: windowWidth,
            height: windowHeight, // changed from windowHeight
            alignItems: "center", // to center the content
          }}
        >
          <Image
            style={{
              width: "100%",
              aspectRatio: 16 / 9,
            }}
            source={{
              uri: item.urlToImage,
            }}
          />
          <View
            style={{
              flex: 0.1,
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
                  {item.title}
                </Text>
                <Ionicons
                  onPress={() => {
                    Linking.openURL(item.url);
                  }}
                  style={{
                    position: "absolute",
                    top: 36,
                    zIndex: 26,
                    right: 30,
                  }}
                  name="globe-outline"
                  size={24}
                  color={Colors.primary}
                />
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
                  {item.publishedAt.split("T")[0]}{" "}
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
                  {item.author}{" "}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 0.8,
              margin: 12,
              marginTop: 30,
            }}
          >
            <View
              style={{
                height: 1,
                marginTop: 10,
                backgroundColor: Colors.primary,
              }}
            ></View>
            <Text
              style={{
                marginTop: 20,
                fontSize: 15,
                marginLeft: 10,
                fontWeight: "500",
                lineHeight: 20,
                color: Colors.black,
                alignSelf: "flex-start",
              }}
            >
              {item.description}
            </Text>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <NavBar back={router.back} />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ref={flatListRef} // set the ref here
        pagingEnabled // enable paging for full height rendering
      />
    </View>
  );
}
