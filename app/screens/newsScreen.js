import { useContext, useEffect, useState } from "react";

import { View, Text, Image } from "react-native";
import NavBar from "../components/navBar";
import { Colors } from "../components/colors";
import { useLocalSearchParams } from "expo-router";
import AppContext from "../components/appContext";
import hitMyApi, { AiSummerise } from "../components/hitApi";

export default function NewsScreen() {
  const params = useLocalSearchParams();

  const { key, featured } = params;
  const [newsData, setNewsData] = useState({});
  const [summerisedData, setSummerisedData] = useState({});
  const { news, setNews, chooseData } = useContext(AppContext);
  useEffect(() => {
    console.clear();
    if (featured) {
      setNewsData(news?.articles[key]);
      // AiSummerise(news?.articles[key].description).then((data) => {
      //   setSummerisedData(data);
      // });
    } else {
      setNewsData(chooseData?.articles[key]);
      // AiSummerise(chooseData?.articles[key].description).then((data) => {
      //   setSummerisedData(data);
      // });
    }
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
              uri: newsData?.urlToImage,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 0.21,
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
                fontSize: 14,
                marginLeft: 10,
                width: 300,

                marginTop: 5,
                fontWeight: "bold",
                color: Colors.primary,
                alignSelf: "flex-start",
              }}
            >
              {newsData.title}
            </Text>
            <View
              style={{
                display: "flex",
                marginTop: 5,
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontFamily: "Roboto",
                  fontSize: 14,
                  marginLeft: 10,
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
                  fontSize: 14,
                  marginLeft: 10,
                  fontWeight: "bold",
                  width: 200,
                  color: Colors.grey,
                  alignSelf: "flex-start",
                }}
              >
                {newsData.author}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 0.001,
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
