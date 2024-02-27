import React, { useEffect, useState } from "react";
import { View, Text, Image, Dimensions, FlatList } from "react-native";
import NavBar from "../components/navBar";
import { Colors } from "../components/colors";
import { useRouter } from "expo-router";
import AppContext from "../components/appContext";

import { Ionicons } from "@expo/vector-icons";
import { Linking } from "react-native";

export default function MyFeed() {
  const { news, setNews } = React.useContext(AppContext);
  const [data, setData] = useState({}); //[news?.articles[key]
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  const router = useRouter();
  useEffect(() => {
    setData(news?.articles);
  }, []);

  const renderItem = ({ item, index }) => {
    if (item.urlToImage != null && !item.description.includes(`…`)) {
      if (index == 0) {
        console.log("item", item.description.includes(`…`));
      }
      console.log("item", index);
      const marginBottom = index % 2 === 0 ? 20 : -12;
      return (
        <View
          style={{
            marginBottom: marginBottom,
            width: windowWidth,
            height: windowHeight + 30,
          }}
        >
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
            color="white"
          />
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
    <View
      style={{
        flex: 1,
      }}
    >
      <NavBar back={router.back} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString();
          // return (
          //   <View
          //     style={{
          //       marginTop: 10,
          //     }}
          //   >
          //     <Text>Hello</Text>
          //   </View>
          // );
        }}
        pagingEnabled
      />
    </View>
  );
}
