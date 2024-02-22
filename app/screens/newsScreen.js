import { useContext, useEffect, useState } from "react";

import { View, Text, Image } from "react-native";
import NavBar from "../components/navBar";
import { Colors } from "../components/colors";
import { useLocalSearchParams } from "expo-router";
import AppContext from "../components/appContext";

export default function NewsScreen() {
  const params = useLocalSearchParams();

  const { title, image, author, description, publishedAt, item, key } = params;
  const [newsData, setNewsData] = useState({});
  const { news, setNews } = useContext(AppContext);
  useEffect(() => {
    console.log("params", news?.articles[key]);
    setNewsData(news?.articles[key]);
  }, []);

  // console.log(news); // console.log({ title, image, author, description, content, publishedAt });
  return (
    <View
      style={{
        margin: 0,
        flex: 1,
      }}
    >
      <NavBar />

      <View
        style={{
          flex: 0.5,
          display: "flex",
          alignItems: "center",
          // marginBottom: 20,
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
              uri: newsData.urlToImage,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 0.15,
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
            // marginTop: 10,
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
              {newsData.title}
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
              {newsData?.publishedAt?.split("T")[0]}{" "}
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
              {newsData.author}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          height: 1,
          backgroundColor: Colors.primary,
        }}
      ></View>
      <View
        style={{
          flex: 0.99,
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
          {newsData?.description}
        </Text>
      </View>
    </View>
  );
}
